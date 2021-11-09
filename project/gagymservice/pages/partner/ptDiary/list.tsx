import NavItem from "@restart/ui/esm/NavItem";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/layout";
import { DiaryItemResponse } from "../../api/diary";

interface IndexProp {
  ptDiarys : DiaryItemResponse[];
  
}
const List= ( {ptDiarys}: IndexProp)=>{
  const router = useRouter();

    return(
        <Layout>
            <div>
            <body >
           <div className="mx-auto mt-5" style={{width:"850px"}}>
        <h4 className=" float-start">
            PT 일지
          </h4>
         
        <table className="table mx-auto" >
          <thead>
            <tr>
              <th scope="col">일자</th>
              <th scope="col">식단내용</th>
              <th scope="col">운동내용</th>
              <th scope="col">문의사항</th>
              <th scope="col">담당강사</th>
              <th scope="col">강사피드백</th>
            </tr>
          </thead>
          {ptDiarys.map((item , index)=>(
          <tbody key={`partners-item-${index}`}>
            <Link href={`/partner/ptDiary/detail/${item.id}`}>
            <tr>
              <td>{item.diaryCreateTime}</td>
              <td>{item.memberName}</td>
              <td>{item.diaryMorning}</td>
              <td>{item.diaryRoutine}</td>
              <td >{item.diaryRequest}</td>
              <td >{item.trainerFeedback}</td>
            </tr>
          </Link>
          </tbody>
          ))}
        </table>
        </div>
        </body>
        </div>
        </Layout>
        )
}

export async function getServerSideProps(){
  // const res = await partnerApi.fetch();
  // const partners = res.data
  const partners  =[{
    id:0,      
      gymName : "한동기",
      gymCoNum : "12312",
      gymLocateSi : "서울",
      gymLocateGunGu:"중구",
      gymAddress : "서울시 동작구 상도동 22-22 2층",
      gymPhoneNum:"102314",
      gymTime : "08-22",
  }
  ]
  const ptDiarys  =[
    {
    id:0,      
    memberName : "한동기",
    diaryMorning : "된장찌개",
    diaryRoutine : "서울",
    diaryRequest:"중구에도 있나요",
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요",
    diaryCreateTime : "2021-10-21"
  },
  {
    id:1,      
    memberName : "한동기",
    diaryMorning : "된장찌개",
    diaryRoutine : "서울",
    diaryRequest:"중구에도 있나요",
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요",
    diaryCreateTime : "2021-10-21"
  },
  {
    id:2,      
    memberName : "한동기",
    diaryMorning : "된장찌개",
    diaryRoutine : "서울",
    diaryRequest:"중구에도 있나요",
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요",
    diaryCreateTime : "2021-10-21"
  },
  ]
  return {props : {partners,ptDiarys }}
}
export default List;