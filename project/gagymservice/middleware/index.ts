import { fork } from "redux-saga/effects";
import partnerSaga from "./modules/partner";

export default function* rootSaga(){
  yield fork(partnerSaga);
}