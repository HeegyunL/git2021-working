import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Layout from "../../../components/layout";
import partnerSaga from "../../../middleware/modules/partner";
import { PartnerItemResponse } from "../../api/partner";
 
interface IndexProp {
  partners : PartnerItemResponse[];
}
const PartnerEdit = ({partners}: IndexProp) => {
  const router = useRouter();
    const [modalOpen, setModalOpen] = React.useState(false);

    
  return(
    <Layout>
  {partners.map((item , index)=>(
      <body key={`photo-item-${index}`}>
        <div className="mx-auto mt-5" style={{width:"850px"}} >
          <h4 className="mt-5 text-center"> 헬스장 정보</h4>
          {/* 헬스장 명 */}
          <div className="d-flex mt-5">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >헬스장 명</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>{item.gymName}</p>
          </div> 
          {/* 사업자 번호 */}
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >사업자 번호</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> {item.gymCoNum}</p>
          </div> 
          {/* 지역 */}
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >지역</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>{item.gymLocateSi} {item.gymLocateGunGu}</p>
          </div> 
          {/* 주소 */}
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >주소</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>{item.gymAddress}</p>
          </div> 
          {/* 전화번호 */}
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >전화 번호</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>{item.gymPhoneNum}</p>
          </div> 
          {/* 운영시간 */}
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >운영시간</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>{item.gymTime}</p>
          </div> 
          {/* 강사 서비스 */}
          <div className="mt-3 d-flex">
            <h4
            className="col text-nowrap text-center"
            style ={{width : "200px"}}
            >강사 서비스</h4> 
            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group"
            style ={{width : "400px"}}>
              <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btncheck1">헬스장</label>

              <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btncheck2">PT</label>

              <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btncheck3">요가</label>

              <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="btncheck4">필라테스</label>
            </div>
          </div>
          {/* 강사 소개 */}
          <div className="mt-3 d-flex">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >강사 소개</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}} >
              <div className="d-flex"> 
                <Button
                  color="primary"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  {/* 트레이너 이름 */}
                </Button>
                <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                  <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                      강사 소개
                    </h5>
                    <button
                      aria-label="Close"
                      className=" close"
                      type="button"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <ModalBody>
                    <div className="d-flex">
                      <p>이름 :</p>
                      <p>김병기</p>
                    </div>
                    <div className="d-flex">
                      <p>한줄 소개 :</p>
                      <p>살 쪽쪽 빼드립니다</p>
                    </div>
                    <div className="d-flex">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center me-3" scope="col"><h3>-</h3></th>
                            <th className="text-center" scope="col">1Time</th>
                            <th className="text-center" scope="col">10Time</th>
                            <th className="text-center" scope="col">30Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="mt-5">
                            <td className="text-center"><h5>PT</h5></td>
                            <td>
                              <p className="text-center" >15000원</p>
                            </td>
                            <td>
                             <p className="text-center" >15000원</p>
                            </td>
                            <td>
                              <p className="text-center" >15000원</p>
                            </td>
                            <td>
                             <p className="text-center" >15000원</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      Close
                    </Button>
                    <Button color="primary" type="button">
                      Save changes
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </p>
            </div>
          {/* 가격 */}
          <div>
            <h4 
            className="col text-nowrap text-center"
            style ={{width : "434px"}}
            >가 격</h4> 
            <div className="mt-3 ms-5 d-flex">
              <table className=" table " >
                <thead>
                  <tr>
                    <th className="text-center me-3" scope="col"><h3> </h3></th>
                    <th className="text-center" scope="col">1Day</th>
                    <th className="text-center" scope="col">3Day</th>
                    <th className="text-center" scope="col">7Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <th className="text-center" scope="row"><h5>헬스장</h5></th>
                    <td>
                        <p className="text-center" >{item.gym1DayPrice}</p>
                    </td>
                    <td>
                    <p className="text-center" >{item.gym3DayPrice}</p>
                    </td>
                    <td>
                    <p className="text-center" >{item.gym7DayPrice}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 ms-5 d-flex">
              <table className="ms-3 table"  >
                <thead>
                  <tr>
                    <th className="text-center"><h3> </h3></th>
                    <th className="text-center">1달</th>
                    <th className="text-center">3달</th>
                    <th className="text-center">6달</th>
                    <th className="text-center">12달</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="justify-content-between">
                    <td className="text-center text-nowrap"><h5>헬스장</h5></td>
                    <td>
                    <p className="text-center" >{item.gymMonthPrice}</p>
                    </td>
                    <td>
                    <p className="text-center" >{item.gym3MonthPrice}</p>
                    </td>
                    <td>
                    <p className="text-center" >{item.gym6MonthPrice}</p>
                    </td>
                    <td>
                    <p className="text-center" >{item.gymYearPrice}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 버튼 */}
          <div className="d-grid mt-3  d-md-flex justify-content-end">
            <Link href="/partner/information/detail">
            <button className="btn btn-primary mb-3" type="button">저장</button>
            </Link>
            <button className="btn btn-primary ms-3 mb-3" type="button">목록</button>
          </div>
        </div>
      </body>
      ))}
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
      gymService : "샤워 와이파이",
      gym1DayPrice : "124",
      gym3DayPrice :"24124",
      gym7DayPrice :"12414",
      gymMonthPrice : "!2341234",
      gym3MonthPrice :"1234234",
      gym6MonthPrice :"12342134",
      gymYearPrice :"1234234",
  }
  ]
  return {props : {partners }}
}
export default PartnerEdit;

