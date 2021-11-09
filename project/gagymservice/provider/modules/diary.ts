import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface DiaryItem {
  id: number;
  memberName: string;
  diaryMorning: string;
  diaryLunch: string;
  diaryDinner: string;
  diaryRoutine: string;
  diaryRequest: string;
  trainerFeedback: string;
  diaryCreateTime: number;
  isEdit?: boolean;
}




interface DiaryState {
  data : DiaryItem[];
  isFetched : boolean;
  isAddCompleted? : boolean;
}

const initialState : DiaryState ={
  data : [],
  isFetched :false,
}


const diarySlice = createSlice({
  name : "diary",
  initialState,
  reducers:{
    // Payload로 item객체를 받음
    addDiary : (state, action:PayloadAction<DiaryItem>)=>{
      const diary = action.payload;
      state.data.unshift(diary);
      state.isAddCompleted = true; //추가확인 표시
    },
    //payload 없는 reducer
    //complted 관련된 속성을 삭제함 (undefined 상태)
    initialCompleted : (state)=>{
      delete state.isAddCompleted;
    }, 
    initialDiaryItem : (state, action: PayloadAction<DiaryItem>)=>{
      const diary = action.payload;
      state.data=[{...diary}];
    },
    initialDiary:(state, action:PayloadAction<DiaryItem[]>)=>{
      const diarys = action.payload;
      state.data = diarys;
      state.isFetched = true;
    },
    

  },
});
export const {
  addDiary,
  initialCompleted,
  initialDiaryItem,
  initialDiary
}= diarySlice.actions;
export default diarySlice.reducer;