import { takeEvery, call, select, put, takeLatest} from "@redux-saga/core/effects";
import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import api,{ PartnerItemRequest, PartnerItemResponse } from "../../pages/api/partner";
import { RootState } from "../../provider";
import partnerReducer,{ addPartner, GymTrainerItem, initialCompleted, initialPartner, initialPartnerItem, PartnerItem } from "../../provider/modules/partner";


// saga action 생성 부분
//partner를 추가하도록 요청하는  action creator를 생성

//전체 데이터 조회에서 추가할 때
export const requestAddPartner = createAction<PartnerItem>(
  `${partnerReducer.name}/requestAddPartner`
);
//partner를 가져오는 action
export const requestFetchPartners = createAction(
  `${partnerReducer.name}/requestFetchPartners`
)

//1건만 가져오는 action
export const requestFetchPartnerItem = createAction<number>(
  `${partnerReducer.name}/requestFetchPartnerItem`
);



// saga action 처리 부분
function* addData(action : PayloadAction<PartnerItem>){
  // action의 payload로 넘어온 객체
  const partnerItemPayload = action.payload;
  // rest api로 보낼 요청객체
  const partnerItemRequest : PartnerItemRequest ={
    id:partnerItemPayload.id,
    gymName:partnerItemPayload.gymName,
    gymCoNum : partnerItemPayload.gymCoNum,
    gymLocateSi : partnerItemPayload.gymLocateSi,
    gymLocateGunGu : partnerItemPayload.gymLocateGunGu,
    gymAddress : partnerItemPayload.gymAddress,
    gymPhoneNum : partnerItemPayload.gymPhoneNum,
    gymTime : partnerItemPayload.gymTime,
    gymService :partnerItemPayload.gymService,
    gym1DayPrice : partnerItemPayload.gym1DayPrice,
    gym3DayPrice : partnerItemPayload.gym3DayPrice,
    gym7DayPrice : partnerItemPayload.gym7DayPrice,
    gymMonthPrice : partnerItemPayload.gymMonthPrice,
    gym3MonthPrice : partnerItemPayload.gym3MonthPrice,
    gym6MonthPrice : partnerItemPayload.gym6MonthPrice,
    gymYearPrice : partnerItemPayload.gymYearPrice,

  }
  const result : AxiosResponse<PartnerItemResponse> = yield call(
    api.add,
    partnerItemRequest
  )

  //redux state 변경
  //redux state 조회하기
  const partnerData : PartnerItem[]= yield select(
    (state:RootState)=> state.partner.data
  );

 const partnerItem : PartnerItem={
  id:result.data.id,
  gymName:result.data.gymName,
  gymCoNum : result.data.gymCoNum,
  gymLocateSi : result.data.gymLocateSi,
  gymLocateGunGu : result.data.gymLocateGunGu,
  gymAddress : result.data.gymAddress,
  gymPhoneNum : result.data.gymPhoneNum,
  gymTime : result.data.gymTime,
  gymService :result.data.gymService,
  gym1DayPrice : result.data.gym1DayPrice,
  gym3DayPrice : result.data.gym3DayPrice,
  gym7DayPrice : result.data.gym7DayPrice,
  gymMonthPrice : result.data.gymMonthPrice,
  gym3MonthPrice : result.data.gym3MonthPrice,
  gym6MonthPrice : result.data.gym6MonthPrice,
  gymYearPrice : result.data.gymYearPrice,

 }

 yield put(addPartner(partnerItem));
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
const result:AxiosResponse<PartnerItemResponse[]> = yield call(api.fetch);

  const partners = result.data.map(
    (item) =>
      ({
        id:item.id,
        gymName : item.gymName,
        gymCoNum : item.gymCoNum,
        gymLocateSi : item.gymLocateSi,
        gymLocateGunGu : item.gymLocateGunGu,
        gymAddress : item.gymAddress,
        gymPhoneNum : item.gymPhoneNum,
        gymTime : item.gymTime,
        gymService :item.gymService,
        gym1DayPrice : item.gym1DayPrice,
        gym3DayPrice : item.gym3DayPrice,
        gym7DayPrice : item.gym7DayPrice,
        gymMonthPrice : item.gymMonthPrice,
        gym3MonthPrice : item.gym3MonthPrice,
        gym6MonthPrice : item.gym6MonthPrice,
        gymYearPrice : item.gymYearPrice,
     } as PartnerItem)
  );
  yield put(initialPartner(partners))
  }

  function* fetchDataItem(action: PayloadAction<number>) {
    yield console.log("--fetchDataItem--");
  
    const id = action.payload;
  
    // 백엔드에서 데이터 받아오기
    const result: AxiosResponse<PartnerItemResponse> = yield call(api.get ,id);
  
    const partner = result.data;
    if (partner) {
      // state 초기화 reducer 실행
      yield put(initialPartnerItem(partner));
    }
  }

// saga action을 감지하는 부분
export default function* partnerSaga(){
  //동일한 타입의 액션은 모두 처리함
  yield takeEvery(requestAddPartner, addData);

  yield takeLatest(requestFetchPartners, fetchData);
  yield takeEvery(requestFetchPartnerItem, fetchDataItem);
}