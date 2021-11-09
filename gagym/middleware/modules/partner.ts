import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { createAction } from "typesafe-actions/dist/deprecated/create-action";
import { resourceLimits } from "worker_threads";
import api,{ PartnerItemRequest, PartnerItemResponse } from "../../pages/api/partner";
import partnerReducer,{
    addPartner,initialPartnerItem, PartnerItem
}from "../../provider/modules/Partner";

// export const requestAddPartner = createAction<PartnerItem>(
// `${PartnerReducer.name}/requestAddPartner`
// );

export const requestFetchPartners = createAction(
    `${partnerReducer.name}/requestFetchPartners`
);

// export const requestFetchNextPartners = createAction<string>(
//     `${partnerReducer.name}/requestFechNextPartners`
// )
// function* fetchDataItem(action: PayloadAction<number>){
//     const id = action.payload;
//     const result : AxiosResponse<PartnerItemResponse> = yield call(api.get, id);

//     const partner = result.data;
//     if(partner){
//         yield put(initialPartnerItem(partner));
//     }
// }

// export default function* partnerSaga(){
//     yield takeEvery(requestAddPartner);

//     yield takeLatest(requestFetchPartners, fetchData);
//     yield takeEvery(requestFetchPartnerItem, fetchDataItem)
// }
// 

