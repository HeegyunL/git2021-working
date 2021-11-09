import axios from "axios";


export interface DiaryItemResponse{
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

export interface DiaryItemRequest{
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
export interface reservation{
  
}

const diaryApi = {
  get: (id: number) =>
    axios.get<DiaryItemResponse>(
       `${"http://localhost:8080"}/ptDiary/{id}`
    ),
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<DiaryItemResponse[]>(
      `${"http://localhost:8080"}/ptDiary`
    ),
  add:(diaryItem:DiaryItemRequest)=>
  axios.post<DiaryItemResponse>(
    `${"http://localhost:8080"}/ptDiary`,
    diaryItem
  )

}
export default diaryApi;