import type { NextPage } from 'next'
import Link from 'next/link';
import React from 'react';
import Layout from "../components/layout";

const Home: NextPage = () => {


  
  return (
    <Layout>
    <div >
    <header >
        PT MARKET
    </header>
    <body>
      <div className="mx-auto"style={{width : "850px"}}>
        <div className="justify-content-md-end">
          <h4 className="mb-3 float-start">
            헬스장 정보
          </h4>
          <Link href="/partner/information/detail/id">
            <button className="btn btn-primary float-end btn-sm">
              상세 보기
            </button>
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
            예약 목록
          </h4>
          <Link href="/partner/reservation/list">
            <button className="btn btn-primary float-end btn-sm">
              상세 보기
            </button>
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
            <button className="btn btn-primary float-end btn-sm">
              상세 보기
            </button>
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
              <td>Jacob</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 22-36 2층</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>서울시 동작구</td>
              <td>02-2422-2412</td>
              <td >07~18시</td>
              <td >서울시 동작구 상도동 22-36 2층</td>
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
      </div>
    </body>
  </div>
</Layout>
  )
}

export default Home
