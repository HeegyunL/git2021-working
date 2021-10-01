import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ContactItem{
  id : number;
  name : string | undefined;
  phone : string| undefined;
  mail : string| undefined;
  memo? : string| undefined;
  createdTime : number| undefined;
}
export interface ContactPage {
  data : ContactItem[];
  totalElements : number;
  totalPages : number;
  page : number;
  pageSize : number;
  isLast : boolean;
}

interface ContactState{
  data : ContactItem[],
  isFetched : boolean, //서버에서 데이터를 받을지에 대한 
  isAddCompleted? : boolean,
  isRemoveCompleted? : boolean,
  isModifyCompleted? : boolean,
  totalElements? : number,
  totalPages : number,
  page : number,
  pageSize : number,
  isLast? : boolean,
}


const initialState : ContactState={
  data:[],
  isFetched : false,
  page : 0,
  pageSize : 2,
  totalPages : 0,

}

const ContactSlice = createSlice({
  name : "contact",
  initialState,
  reducers:{
    addContact: (state, action: PayloadAction<ContactItem>) => {
      const Contact = action.payload;
      state.data.unshift(Contact);
      state.isAddCompleted = true
    },
    initialCompleted :(state)=>{
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    },
    editContact: (state, action: PayloadAction<ContactItem>) => {
      const Contact = action.payload;
      const ContactItem =state.data.find((item)=> item.id === Contact.id);
      if (ContactItem){
        ContactItem.name = Contact.name;
        ContactItem.phone = Contact.phone;
        ContactItem.mail = Contact.mail;
        ContactItem.memo = Contact.memo;
      }
      state.isModifyCompleted = true;
    },
    removeContact : (state, action :PayloadAction<number>)=>{
      const id = action.payload;
      state.data.splice(
        state.data.findIndex((item)=> item.id === id),
        1
      )
      state.isRemoveCompleted = true;
    },
    initialContact : (state , action:PayloadAction<ContactItem[]>) =>{
    const contacts = action.payload;
    state.data = contacts;
    state.isFetched = true;
    },

    initialPagedContact : (state, action : PayloadAction<ContactPage>)=>{
      state.data = action.payload.data;
      state.totalElements = action.payload.totalElements;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.isLast = action.payload.isLast;
      state.isFetched = true;
    }
  },
})

export const { 
  addContact,removeContact,editContact,initialContact, initialCompleted,
  initialPagedContact,
}= ContactSlice.actions;
export default ContactSlice.reducer;

