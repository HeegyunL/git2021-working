import { createAction,nanoid, PayloadAction } from "@reduxjs/toolkit";
import contactReducer, 
{ addContact, 
  ContactItem,
  ContactPage,
  editContact,
  initialContact, 
  initialPagedContact, 
  removeContact } from "./ContactSlice";
import api, {ContactItemRequest, ContactItemResponse, ContactPagingReponse} from "./contactApi";
import { AxiosResponse } from "axios";
import { call, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { initialCompleted } from "../photo/photoSlice";
import { addAlert } from "../../components/alert/alertSlice";
import { endProgress, startProgress } from "../../components/progress/ProgressSlice";
import { RootState } from "../../store";


export interface PageRequest {
  page : number;
  size : number;
}
export const requestAddContact = createAction<ContactItem>(
  `${contactReducer.name}/requestAddContact`
);

export const requestFetchContacts = createAction(
  `${contactReducer.name}/requestFetchContacts`
);
export const requestFetchPagingContacts = createAction<PageRequest>(
  `${contactReducer.name}/requestFetchPagingContacts`
)
export const requestRemoveContacts = createAction<number>(
  `${contactReducer.name}/requestRemoveContacts`
);
export const requestModifyContacts = createAction<ContactItem>(
  `${contactReducer.name}/requestModifyContacts`
);

function* addData(action : PayloadAction<ContactItem>){
  try{

  const contactItemPayload = action.payload;

  const contactItemRequest : ContactItemRequest ={
    name : contactItemPayload.name,
    phone : contactItemPayload.phone,
    mail : contactItemPayload.mail,
    memo : contactItemPayload.memo
  };

yield put(startProgress());

  const result : AxiosResponse<ContactItemResponse> = yield call(
    api.add,
    contactItemRequest
  );

yield put(endProgress());
  const contactData : ContactItem[] = yield select(
    (state:RootState) => state.contact.data
  );
  if(contactData.length>0){
    const deleteId = contactData[contactData.length - 1].id;
    yield put(removeContact(deleteId));
  }


  const contactItem : ContactItem ={
    id : result.data.id,
    name : result.data.name,
    phone : result.data.phone,
    mail : result.data.mail,
    memo : result.data.memo,
    createdTime: result.data.createdTime,
  };

  yield put(addContact(contactItem));

  yield put(initialCompleted());

  yield put(
    addAlert({id:nanoid(),variant:"success" , message :"저장"})
  );

}catch(e: any){
  yield put(endProgress());

  yield put(
    addAlert({id:nanoid(),variant : "danger",message:e.message}))
}
};

function* fetchData() {
  yield put(startProgress());

  const result : AxiosResponse<ContactItemResponse[]>= yield call(api.fetch);

  yield put(endProgress());

  const contacts = result.data.map(
    (item)=>
    ({
      id:item.id,
      name : item.name,
      phone : item.phone,
      mail : item.mail,
      memo : item.memo,
    } as ContactItem)
  );
  yield put(initialContact(contacts))
}
function* fetchPagingData(action : PayloadAction<PageRequest>){
  const page = action.payload.page;
  const size = action.payload.size;
  yield put(startProgress());
  try{
    const result :AxiosResponse<ContactPagingReponse> = yield call(
      api.fetchPaging,
      page,
      size
    );
    yield put(endProgress());

    const contactPage : ContactPage ={
      data : result.data.content.map(
        (item) =>
        ({
          id:item.id,
          name: item.name,
          phone : item.phone,
          mail : item.mail,
          memo : item.memo,
          createdTime: item.createdTime,
        }as ContactItem)
      ),
      totalElements: result.data.totalElements,
      totalPages: result.data.totalPages,
      page: result.data.number,
      pageSize: result.data.size,
      isLast: result.data.last,
    };
    yield put(initialPagedContact(contactPage));
  }catch(e:any){
    yield put(endProgress());

    yield put(
      addAlert({id:nanoid(), variant : "danger",message : e.message})
    );
  }
}

function* RemoveData(action : PayloadAction<number>){
  const id = action.payload;
  yield put(startProgress());
  const result : AxiosResponse<boolean> = yield call(api.remove, id);

  yield put(endProgress());
  if(result.data){
    yield put(removeContact(id));
  }else{
    yield put(
      addAlert({id:nanoid(),variant:"danger",message:"오류로 저장이 되지 안됐습니다"})
    )
  }
  yield put(initialCompleted());

  const page : number =yield select((state:RootState)=> state.contact.page);
  const size : number = yield select((state:RootState)=> state.contact.pageSize);

  yield put(requestFetchPagingContacts({page,size}))
}

function* modifyData(action : PayloadAction<ContactItem>){
  const ContactItemPayload = action.payload;

  const contactItemRequest : ContactItemRequest = {
    name : ContactItemPayload.name,
    phone : ContactItemPayload.phone,
    mail : ContactItemPayload.mail,
    memo : ContactItemPayload.memo,
  };
  yield put(startProgress());

  const result : AxiosResponse<ContactItemResponse> = yield call(
    api.modify,
    ContactItemPayload.id,
    contactItemRequest
  );

  yield put(endProgress());

  const contactItem : ContactItem = {
    id : result.data.id,
    name : result.data.name,
    phone : result.data.phone,
    mail : result.data.mail,
    memo : result.data.memo,
    createdTime : result.data.createdTime,
  };

  yield put(editContact(contactItem));

  yield put(initialCompleted());
}

export default function* contactSaga(){
  yield takeEvery(requestAddContact, addData);
  yield takeLatest(requestFetchContacts, fetchData);
  yield takeLatest(requestFetchPagingContacts,fetchPagingData);
  yield takeLatest(requestRemoveContacts, RemoveData);
  yield takeLatest(requestModifyContacts,modifyData);
}


