import { takeEvery, call, select, put, takeLatest} from "@redux-saga/core/effects";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { DiaryItemRequest, DiaryItemResponse } from "../../pages/api/diary";
import api from "../../pages/api/diary";
import { RootState } from "../../provider";
import diary, { addDiary, initialDiary, initialDiaryItem } from "../../provider/modules/diary";
import diaryReducer,{  DiaryItem,initialCompleted} from "../../provider/modules/diary";


// saga action 생성 부분
//partner를 추가하도록 요청하는  action creator를 생성

//전체 데이터 조회에서 추가할 때
export const requestAddDiary = createAction<DiaryItem>(
  `${diaryReducer.name}/requestAddDiary`
);
//partner를 가져오는 action
export const requestFetchDiarys = createAction(
  `${diaryReducer.name}/requestFetchDiary`
)

//1건만 가져오는 action
export const requestFetchDiaryItem = createAction<number>(
  `${diaryReducer.name}/requestFechDiaryItem`
);



// saga action 처리 부분
function* addData(action : PayloadAction<DiaryItem>){
  // action의 payload로 넘어온 객체
  const partnerItemPayload = action.payload;
  // rest api로 보낼 요청객체
  const diaryItemRequest : DiaryItemRequest ={
    memberName: partnerItemPayload.memberName,
    diaryMorning: partnerItemPayload.diaryMorning,
    diaryLunch: partnerItemPayload.diaryLunch,
    diaryDinner: partnerItemPayload.diaryDinner,
    diaryRoutine: partnerItemPayload.diaryRoutine,
    diaryRequest: partnerItemPayload.diaryRequest,
    trainerFeedback: partnerItemPayload.trainerFeedback,
    diaryCreateTime: partnerItemPayload.diaryCreateTime,


  }
  const result : AxiosResponse<DiaryItemResponse> = yield call(
    api.add,
    diaryItemRequest
  )

  //redux state 변경
  //redux state 조회하기
  const diaryData : DiaryItem[]= yield select(
    (state:RootState)=> state.diary.data
  );

 const diaryItem :DiaryItem={
  id:result.data.id,
  memberName: result.data.memberName,
  diaryMorning: result.data.diaryMorning,
  diaryLunch: result.data.diaryLunch,
  diaryDinner: result.data.diaryDinner,
  diaryRoutine: result.data.diaryRoutine,
  diaryRequest: result.data.diaryRequest,
  trainerFeedback: result.data.trainerFeedback,
  diaryCreateTime: result.data.diaryCreateTime,
 }

 yield put(addDiary(diaryItem));
 yield put(initialCompleted());

}

//redux side effect
// 1. api 연동
// 2. 파일처리
// 3. 처리중 메시지 보여주기/감추기
// 4. 에러메시지 띄우기
// 서버에서 GET으로 데이터를 가저오고, redux state를 초기화
function* fetchData() {

  //백엔드에서 데이터 받아오기
const result:AxiosResponse<DiaryItemResponse[]> = yield call(api.fetch);

  const diary = result.data.map(
    (item) =>
      ({
        id:item.id,
        memberName: item.memberName,
        diaryMorning: item.diaryMorning,
        diaryLunch: item.diaryLunch,
        diaryDinner: item.diaryDinner,
        diaryRoutine: item.diaryRoutine,
        diaryRequest: item.diaryRequest,
        trainerFeedback: item.trainerFeedback,
        diaryCreateTime: item.diaryCreateTime,
     } as DiaryItem)
  );
  yield put(initialDiary(diary))
  }

  function* fetchDataItem(action: PayloadAction<number>) {
    yield console.log("--fetchDataItem--");
  
    const id = action.payload;
  
    // 백엔드에서 데이터 받아오기
    const result: AxiosResponse<DiaryItemResponse> = yield call(api.get, id);
  
    const diary = result.data;
    if (diary) {
      // state 초기화 reducer 실행
      yield put(initialDiaryItem(diary));
    }
  }

// saga action을 감지하는 부분
export default function* diarySaga(){
  //동일한 타입의 액션은 모두 처리함
  yield takeEvery(requestAddDiary, addData);

  yield takeLatest(requestFetchDiarys, fetchData);
  yield takeEvery(requestFetchDiaryItem, fetchDataItem);
}