import NavItem from '@restart/ui/esm/NavItem'
import { iteratorSymbol } from 'immer/dist/internal'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

import partnerSaga from '../middleware/modules/partner'
import { DiaryItemResponse } from './api/diary'
import partnerApi, { PartnerItemResponse } from './api/partner'

interface IndexProp {
  partners : PartnerItemResponse[];
  ptDiarys : DiaryItemResponse[];
  
}

    
const Index= ({partners, ptDiarys}: IndexProp)=>{
  const router = useRouter();

  return (
    <Layout>
    <div >
    <header >
      
    </header>
    <body>
      <div className="mx-auto"style={{width : "850px"}}>
     
   
        <div className="justify-content-md-end">
          <h4 className="mb-3 float-start">
            헬스장 정보
          </h4>
          <Link href="/partner/information/detail">
            <a>
            <button className="btn btn-primary float-end btn-sm">
              상세 보기
            </button>
            </a>
          </Link>
        <table className="table mx-auto" >
          <thead>
            <tr>
              <th scope="col">헬스장 명</th>
              <th scope="col">위치</th>
              <th scope="col">전화번호</th>
              <th scope="col">운영시간</th>
              <th scope="col">주소</th>
            </tr>
          </thead>
          {partners.map((item, index)=>(
          <tbody key={`partners-item-${index}`}>
         <Link href="/partner/information/detail">
           <tr className ="text-center my-2">  
              <td>
                {item.gymName}
                </td>
              <td>
                {item.gymLocateSi} {item.gymLocateGunGu}
                </td>
              <td>
                {item.gymPhoneNum}
                </td>
              <td >
                {item.gymTime}
                </td>
              <td >
                {item.gymAddress}
                </td>
            </tr>
            </Link>
          </tbody>
            ))}
        </table>
        </div>
        <div className="mt-5">
        <h4 className=" float-start">
            예약 목록
          </h4>
          <Link href="/partner/reservation/list">
            <a>
            <button className="btn btn-primary float-end btn-sm">
              목록 보기
            </button>
            </a>
          </Link>
        <table className="table mx-auto" >
          <thead>
            <tr>
              <th scope="col">헬스장명</th>
              <th scope="col">위치</th>
              <th scope="col">전화번호</th>
              <th scope="col">운영시간</th>
              <th scope="col">주소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 신동아리버파크 2층</td>
            </tr>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 신동아리버파크 2층</td>
            </tr>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 신동아리버파크 2층</td>
            </tr>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 신동아리버파크 2층</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 22-36 2층</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="mt-5">
        <h4 className=" float-start">
            PT 일지
          </h4>
          <Link href="/partner/ptDiary/list">
            <a>
            <button className="btn btn-primary float-end btn-sm">
             목록 보기
            </button>
            </a>
           </Link>
        <table className="table mx-auto" >
          <thead>
            <tr>
              <th scope="col">이름</th>
              <th scope="col">식단</th>
              <th scope="col">운동</th>
              <th scope="col">문의사항</th>
              <th scope="col">피드백</th>
            </tr>
          </thead>
            {ptDiarys.map((item, index)=>(
          <tbody  key={`partners-item-${index}`}>
            <Link href={`/partner/ptDiary/detail/${item.id}`}>
            <tr>
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
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요"
  },
  {
    id:1,      
    memberName : "한동기",
    diaryMorning : "된장찌개",
    diaryRoutine : "서울",
    diaryRequest:"중구에도 있나요",
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요"
  },
  {
    id:2,      
    memberName : "한동기",
    diaryMorning : "된장찌개",
    diaryRoutine : "서울",
    diaryRequest:"중구에도 있나요",
    trainerFeedback : "서울시 동작구 상도동 22-22 2층로 오세요"
  },
  ]
  return {props : {partners,ptDiarys }}
}

export default Index
