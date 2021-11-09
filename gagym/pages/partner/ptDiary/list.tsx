import Layout from "../../../components/layout";


const list=()=>{
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
          <tbody>
            <tr>
              <td>10.25</td>
              <td>아침 - 고구마/우유</td>
              <td>PT+런닝2시간</td>
              <td >-</td>
              <td >이두근</td>
              <td >미응답</td>
            </tr>
            <tr>
              <td>10.24</td>
              <td>아침 - 고구마/우유</td>
              <td>PT+런닝2시간</td>
              <td >-</td>
              <td >이두근</td>
              <td >응답</td>
            </tr>
            <tr>
              <td>10.23</td>
              <td>아침 - 고구마/우유</td>
              <td>PT+런닝2시간</td>
              <td >-</td>
              <td >이두근</td>
              <td >응답</td>
            </tr>
            <tr>
              <td>10.22</td>
              <td>아침 - 고구마/우유</td>
              <td>PT+런닝2시간</td>
              <td >-</td>
              <td >이두근</td>
              <td >응답</td>
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