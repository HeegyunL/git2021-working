import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Layout from "../../../../components/layout";
  const PartnerDetail = () => {
  
    const [modalOpen, setModalOpen] = React.useState(false);

    
  return(
    <Layout>
      <body>
        <div className="mx-auto mt-5" style={{width:"850px"}}>
          <h4 className="mt-5 text-center"> 헬스장 정보</h4>
          <div className="d-flex mt-5">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >헬스장 명</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 한동기 헬스클럽</p>
          </div> 
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >사업자 번호</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 110-03-12384</p>
          </div> 
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >지역</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>서울시 동작구</p>
          </div> 
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >주소</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 서울시 동작구 상도동 11-023</p>
          </div> 
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >전화 번호</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>070-192-2931</p>
          </div> 
          <div className="d-flex mt-3">
            <h4 
            className="col me-3 text-nowrap text-center"
            style ={{width : "200px"}}
            >운영시간</h4> 
            <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>08~22시</p>
          </div> 
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
                  김병기
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
                            <th className="text-center" scope="col">1Day</th>
                            <th className="text-center" scope="col">3Day</th>
                            <th className="text-center" scope="col">7Day</th>
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
            <h4 
            className="col text-nowrap text-center"
            style ={{width : "434px"}}
            >가 격</h4> 
            <div className="mt-3 ms-5 d-flex">
              <table className=" table " >
                <thead>
                  <tr>
                    <th className="text-center me-3" scope="col"><h3>-</h3></th>
                    <th className="text-center" scope="col">1Day</th>
                    <th className="text-center" scope="col">3Day</th>
                    <th className="text-center" scope="col">7Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <th className="text-center" scope="row"><h5>헬스장</h5></th>
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
                  <tr className="mt-5">
                    <th className="text-center" scope="row"><h5>PT</h5></th>
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
                  <tr className="mt-5">
                    <th className="text-center" scope="row"><h5>요가</h5></th>
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
                  <tr className="mt-5 ">
                    <th className="text-center" scope="row"><h5>필라테스</h5></th>
                    <td >
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
            <div className="mt-3 ms-5 d-flex">
              <table className="ms-3 table"  >
                <thead>
                  <tr>
                    <th className="text-center"><h3>-</h3></th>
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
                  <tr className="mt-5">
                    <td className="text-center"><h5>요가</h5></td>
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
                  <tr className="mt-5 ">
                    <td className="text-center me-5 text-nowrap"><h5>필라테스</h5></td>
                    <td >
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
                <div className="d-grid mt-3  d-md-flex justify-content-between">
                <button className="btn btn-primary mb-3" type="button">응답</button>
                <button className="btn btn-primary mb-3" type="button">목록</button>
            </div>
            </div>
        </body>
    </Layout>
        )
}
export default PartnerDetail;

