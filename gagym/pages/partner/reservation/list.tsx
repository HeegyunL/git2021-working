import Layout from "../../../components/layout";


const list=()=>{
    return(
        <Layout>
            <div>
            <body >
           <div className="mx-auto mt-5" style={{width:"850px"}}>
        <h4 className=" float-start">
             예약 내역
          </h4>
          <button className="btn btn-primary float-end btn-sm">
            상세 보기
          </button>
        <table className="table mx-auto" >
          <thead>
            <tr>
              <th scope="col">헬스장명</th>
              <th scope="col">이름</th>
              <th scope="col">전화번호</th>
              <th scope="col">희망 운영권</th>
              <th scope="col">희망 강사</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>김덕구</td>
              <td>017-2834-9234</td>
              <td >PT1회권</td>
              <td >김칠수</td>
            </tr>
            <tr>
              <td>모어짐</td>
              <td>박철구</td>
              <td>017-2834-9234</td>
              <td >PT1회권</td>
              <td >김칠수</td>
            </tr>
            <tr>
              <td>한동기 헬스클럽</td>
              <td>김덕구</td>
              <td>017-2834-9234</td>
              <td >PT1회권</td>
              <td >김칠수</td>
            </tr>
            <tr>
              <td>킹콩헬스</td>
              <td>김덕구</td>
              <td>017-2834-9234</td>
              <td >PT1회권</td>
              <td >이철린</td>
            </tr>
          </tbody>
        </table>
        </div>
        </body>
        </div>
        </Layout>
        )
}
export default list;