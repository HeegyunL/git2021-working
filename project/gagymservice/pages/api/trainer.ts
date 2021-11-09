import axios from "axios";


export interface TrainerItemResponse{
  id: number;
  trainerName:string;
  trainerIntro:string;
  trainerPhotoUrl:string;
  pt1TimePrice:string;
  pt10TimePrice:string;
  pt30TimePrice:string;
  yoga1TimePrice:string;
  yoga10TimePrice:string;
  yoga30TimePrice:string;
  pilates1TimePrice:string;
  pilates10TimePrice:string;
  pilates30TimePrice:string;
}

export interface TrainerItemRequest{
  id: number;
  trainerName:string;
  trainerIntro:string;
  trainerPhotoUrl:string;
  pt1TimePrice:string | undefined;
  pt10TimePrice:string| undefined;
  pt30TimePrice:string| undefined;
  yoga1TimePrice:string| undefined;
  yoga10TimePrice:string| undefined;
  yoga30TimePrice:string| undefined;
  pilates1TimePrice:string| undefined;
  pilates10TimePrice:string| undefined;
  pilates30TimePrice:string| undefined;
}
export interface reservation{
  
}

const trainerApi = {
  get: () =>
    axios.get<TrainerItemResponse>(
       `${"http://localhost:8080"}/partner/`
    ),
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<TrainerItemResponse[]>(
      `${"http://localhost:8080"}/partner`
    ),
  add:(trainerItem:TrainerItemRequest)=>
  axios.post<TrainerItemResponse>(
    `${"http://localhost:8080"}/partner`,
    trainerItem
  )

}
export default trainerApi;