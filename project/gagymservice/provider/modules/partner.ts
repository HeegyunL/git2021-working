import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PartnerItem {
  id: number;
  gymName:string;
  gymCoNum : string;
  gymLocateSi : string;
  gymLocateGunGu : string;
  gymAddress : string;
  gymPhoneNum : string;
  gymTime : string;
  gymService :string;
  gym1DayPrice : string;
  gym3DayPrice : string;
  gym7DayPrice : string;
  gymMonthPrice : string;
  gym3MonthPrice : string;
  gym6MonthPrice : string;
  gymYearPrice : string;
  gymTrainer? : GymTrainerItem[]
}

export interface GymTrainerItem{
  id:number;
  trainerName : string;
  trainerIntro : string;
  trainerPhotoUrl : string;
  pt1TimePrice : string;
  pt10TimePrice : string;
  pt30TimePrice : string;
  yoga1TimePrice : string;
  yoga10TimePrice : String;
  yoga30TimePrice : string;
  pilates1TimePrice : string;
  pilates10TimePrice : string;
  pilates30TimePrice : string;
}




interface PartnerState {
  data : PartnerItem[];
  isFetched : boolean;
  isAddCompleted? : boolean;
  isRemoveCompleted?: boolean;
  isModifyCompleted?: boolean;

}


const initialState : PartnerState ={
  data : [
    {
      id:0,      
      gymName : "한동기",
      gymCoNum : "12312",
      gymLocateSi : "서울",
      gymLocateGunGu:"중구",
      gymAddress : "서울시 동작구 상도동 22-22 2층",
      gymPhoneNum:"102314",
      gymTime : "08-22",
      gymService : "샤워 와이파이",
      gym1DayPrice : "124",
      gym3DayPrice :"24124",
      gym7DayPrice :"12414",
      gymMonthPrice : "!2341234",
      gym3MonthPrice :"1234234",
      gym6MonthPrice :"12342134",
      gymYearPrice :"1234234",
    },
  ],
  isFetched :false,
}


const partnerSlice = createSlice({
  name : "partner",
  initialState,
  reducers:{
    // Payload로 item객체를 받음
    addPartner : (state, action:PayloadAction<PartnerItem>)=>{
      const partner = action.payload;
      console.log("--in reducer function--");
      console.log(partner);
      state.data.unshift(partner);
      state.isAddCompleted = true; //추가확인 표시
    },
    //payload 없는 reducer
    //complted 관련된 속성을 삭제함 (undefined 상태)
    initialCompleted : (state)=>{
      delete state.isAddCompleted;
      delete state.isRemoveCompleted;
      delete state.isModifyCompleted;
    }, 
    initialPartnerItem : (state, action: PayloadAction<PartnerItem>)=>{
      const partner = action.payload;
      state.data=[{...partner}];
    },
    removePartner: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // id에 해당하는 아이템의 index를 찾고 그 index로 splice를 한다.
      state.data.splice(
        state.data.findIndex((item) => item.id === id),
        1
      );
      state.isRemoveCompleted = true; // 삭제 되었음을 표시
    },
    modifyPhoto: (state, action: PayloadAction<PartnerItem>) => {
      // 생성해서 넘긴 객체
      const modifyItem = action.payload;
      // state에 있는 객체
      const partnerItem = state.data.find((item) => item.id === modifyItem.id);
      // state에 있는 객체의 속성을 넘김 객체의 속성으로 변경
      if (partnerItem) {
        partnerItem.gymName=modifyItem.gymName;
        partnerItem.gymCoNum=modifyItem.gymCoNum;
        partnerItem.gymLocateSi=modifyItem.gymLocateSi;
        partnerItem.gymLocateGunGu=modifyItem.gymLocateGunGu;
        partnerItem.gymAddress=modifyItem.gymAddress;
        partnerItem.gymPhoneNum=modifyItem.gymPhoneNum;
        partnerItem.gymTime=modifyItem.gymTime;
        partnerItem.gymService=modifyItem.gymService;
        partnerItem.gym1DayPrice=modifyItem.gym1DayPrice;
        partnerItem.gym3DayPrice=modifyItem.gym3DayPrice;
        partnerItem.gym7DayPrice=modifyItem.gym7DayPrice;
        partnerItem.gymMonthPrice=modifyItem.gymMonthPrice;
        partnerItem.gym3MonthPrice=modifyItem.gym3MonthPrice;
        partnerItem.gym6MonthPrice=modifyItem.gym6MonthPrice;
        partnerItem.gymYearPrice=modifyItem.gymYearPrice;

        
      }
      state.isModifyCompleted = true; // 변경 되었음을 표시
    },
    initialPartner: (state, action:PayloadAction<PartnerItem[]>)=>{
      const partner = action.payload;
      state.data = partner;
      state.isFetched = true;
    },
    

  },
});
export const {
  addPartner,
  initialCompleted,
  initialPartnerItem,
  initialPartner
}= partnerSlice.actions;
export default partnerSlice.reducer;