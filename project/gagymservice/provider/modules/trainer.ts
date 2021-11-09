import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TrainerItem {
  id: number;
  trainerName:string;
  trainerIntro:string;
  trainerPhotoUrl:string;
  pt1TimePrice?:string;
  pt10TimePrice?:string;
  pt30TimePrice?:string;
  yoga1TimePrice?:string;
  yoga10TimePrice?:string;
  yoga30TimePrice?:string;
  pilates1TimePrice?:string;
  pilates10TimePrice?:string;
  pilates30TimePrice?:string;
}





interface TrainerState {
  data : TrainerItem[];
  isFetched : boolean;
  isAddCompleted? : boolean;

}


const initialState : TrainerState ={
  data : [],
  isFetched :false,
}


const trainerSlice = createSlice({
  name : "trainer",
  initialState,
  reducers:{
    // Payload로 item객체를 받음
    addTrainer : (state, action:PayloadAction<TrainerItem>)=>{
      const trainer = action.payload;
      state.data.unshift(trainer);
      state.isAddCompleted = true; //추가확인 표시
    },
    //payload 없는 reducer
    //complted 관련된 속성을 삭제함 (undefined 상태)
    initialCompleted : (state)=>{
      delete state.isAddCompleted;
    }, 
    initialTrainerItem : (state, action: PayloadAction<TrainerItem>)=>{
      const trainer = action.payload;
      state.data=[{...trainer}];
    },
    initialTrainer:(state, action:PayloadAction<TrainerItem[]>)=>{
      const trainer = action.payload;
      state.data = trainer;
      state.isFetched = true;
    },
    

  },
});
export const {
  addTrainer,
  initialCompleted,
  initialTrainerItem,
  initialTrainer
}= trainerSlice.actions;
export default trainerSlice.reducer;