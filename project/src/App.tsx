import React from 'react';
import './App.scss';


function App() {
  return (
    <div >
      <header >
          PT MARKET
      </header>
      <body>
        <div className="mx-auto"style={{width : "850px"}}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <h3>헬스장 정보</h3>
            <button className="btn btn-primary me-md-2" type="button">상세보기</button>
          </div>
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
            </tbody>
          </table>
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
            </tbody>
          </table>
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
            </tbody>
          </table>
        </div>
      </body>
    </div>
  );
}

export default App;
