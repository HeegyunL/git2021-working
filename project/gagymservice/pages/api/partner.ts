import axios from "axios";

export interface PartnerItemResponse{
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
}
  interface GymTrainer{
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
export interface PartnerItemRequest{
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
  gymTrainer ?: GymTrainer[];
}


const partnerApi = {
  get: (id:number) =>
    axios.get<PartnerItemResponse>(
       `http://localhost:8080/partner/information/detail`
    ),
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<PartnerItemResponse[]>(
      `http://localhost:8080/partner/information/detail`
      ),
  
    add:(partnerItem:PartnerItemRequest)=>
  axios.post<PartnerItemResponse>(
    `"http://localhost:8080/partner/information/Create`,
    partnerItem
  ),
  remove:() =>
  axios.delete<boolean>(`http://localhost:8080/partner/information/detail`),

  modify :( partnerItem:PartnerItemRequest)=>
  axios.put<PartnerItemResponse>(
    `http://localhost:8080/partner/information/detail`,
    partnerItem
  )

};
export default partnerApi;