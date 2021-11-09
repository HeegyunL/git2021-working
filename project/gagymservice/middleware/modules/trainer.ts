import { takeEvery, call, select, put, takeLatest} from "@redux-saga/core/effects";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { TrainerItemRequest, TrainerItemResponse } from "../../pages/api/trainer";
import api from "../../pages/api/trainer";
import { RootState } from "../../provider";
import trainer, { addTrainer, initialTrainer, initialTrainerItem } from "../../provider/modules/trainer";
import trainerReducer,{  TrainerItem,initialCompleted} from "../../provider/modules/trainer";


// saga action 생성 부분
//partner를 추가하도록 요청하는  action creator를 생성

//전체 데이터 조회에서 추가할 때
export const requestAddTrainer = createAction<TrainerItem>(
  `${trainerReducer.name}/requestAddTrainer`
);
//partner를 가져오는 action
export const requestFetchTrainers = createAction(
  `${trainerReducer.name}/requestFetchTrainers`
)

//1건만 가져오는 action
export const requestFetchTrainersItem = createAction<number>(
  `${trainerReducer.name}/requestFechTrainerItem`
);
export const requestFetchTrainerItem = createAction<number>(
  `${trainerReducer.name}/requestFetchTrainerItem`
);



// saga action 처리 부분
function* addData(action : PayloadAction<TrainerItem>){
  // action의 payload로 넘어온 객체
  const trainerItemPayload = action.payload;
  // rest api로 보낼 요청객체
  const trainerItemRequest : TrainerItemRequest ={
    id:trainerItemPayload.id,
    trainerName:trainerItemPayload.trainerName,
    trainerIntro:trainerItemPayload.trainerIntro,
    trainerPhotoUrl:trainerItemPayload.trainerPhotoUrl,
    pt1TimePrice:trainerItemPayload.pt1TimePrice,
    pt10TimePrice:trainerItemPayload.pt10TimePrice,
    pt30TimePrice:trainerItemPayload.pt30TimePrice,
    yoga1TimePrice:trainerItemPayload.yoga1TimePrice,
    yoga10TimePrice:trainerItemPayload.yoga10TimePrice,
    yoga30TimePrice:trainerItemPayload.yoga30TimePrice,
    pilates1TimePrice:trainerItemPayload.pilates1TimePrice,
    pilates10TimePrice:trainerItemPayload.pilates10TimePrice,
    pilates30TimePrice:trainerItemPayload.pilates30TimePrice
  }
  const result : AxiosResponse<TrainerItemResponse> = yield call(
    api.add,
    trainerItemRequest
  )

  //redux state 변경
  //redux state 조회하기
  const trainerData : TrainerItem[]= yield select(
    (state:RootState)=> state.trainer.data
  );

 const trainerItem :TrainerItem={
  id:result.data.id,
  trainerName:result.data.trainerName,
  trainerIntro:result.data.trainerIntro,
  trainerPhotoUrl:result.data.trainerPhotoUrl,
  pt1TimePrice:result.data.pt1TimePrice,
  pt10TimePrice:result.data.pt10TimePrice,
  pt30TimePrice:result.data.pt30TimePrice,
  yoga1TimePrice:result.data.yoga1TimePrice,
  yoga10TimePrice:result.data.yoga10TimePrice,
  yoga30TimePrice:result.data.yoga30TimePrice,
  pilates1TimePrice:result.data.pilates1TimePrice,
  pilates10TimePrice:result.data.pilates10TimePrice,
  pilates30TimePrice:result.data.pilates30TimePrice
 }

 yield put(addTrainer(trainerItem));
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
const result:AxiosResponse<TrainerItemResponse[]> = yield call(api.fetch);

  const trainers = result.data.map(
    (item) =>
      ({
        id:item.id,
        trainerName:item.trainerName,
        trainerIntro:item.trainerIntro,
        trainerPhotoUrl:item.trainerPhotoUrl,
        pt1TimePrice:item.pt1TimePrice,
        pt10TimePrice:item.pt10TimePrice,
        pt30TimePrice:item.pt30TimePrice,
        yoga1TimePrice:item.yoga1TimePrice,
        yoga10TimePrice:item.yoga10TimePrice,
        yoga30TimePrice:item.yoga30TimePrice,
        pilates1TimePrice:item.pilates1TimePrice,
        pilates10TimePrice:item.pilates10TimePrice,
        pilates30TimePrice:item.pilates30TimePrice

     } as TrainerItem)
  );
  yield put(initialTrainer(trainers))
  }

  function* fetchDataItem(action: PayloadAction<number>) {
    yield console.log("--fetchDataItem--");
  
    const id = action.payload;
  
    // 백엔드에서 데이터 받아오기
    const result: AxiosResponse<TrainerItemResponse> = yield call(api.get );
  
    const trainer = result.data;
    if (trainer) {
      // state 초기화 reducer 실행
      yield put(initialTrainerItem(trainer));
    }
  }

// saga action을 감지하는 부분
export default function* trainerSaga(){
  //동일한 타입의 액션은 모두 처리함
  yield takeEvery(requestAddTrainer, addData);

  yield takeLatest(requestFetchTrainers, fetchData);
  yield takeEvery(requestFetchTrainerItem, fetchDataItem);
}