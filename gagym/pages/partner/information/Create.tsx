
import { useRef } from "react";
import Layout from "../../../components/layout";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import React from "react";
const Create =()=>{


    const [modalOpen, setModalOpen] = React.useState(false);

    const gymNameInput=useRef<HTMLInputElement>(null);
    const gymCoNumInput=useRef<HTMLInputElement>(null);
    const gymLocateInput=useRef<HTMLInputElement>(null);
    const gymAddressInput=useRef<HTMLInputElement>(null);
    const gymPhoneNumInput=useRef<HTMLInputElement>(null);
    const gymTimeInput=useRef<HTMLInputElement>(null);
    const gymServiceInput=useRef<HTMLInputElement>(null);
    const gymNoticeInput=useRef<HTMLInputElement>(null);
    const gymPriceInput=useRef<HTMLInputElement>(null);
    return(
        <Layout>
            <body>
                <div className="mx-auto" style={{width:"850px"}}>
                <h4 className="mt-5 text-center"> 등록 하기</h4>
                <div className="d-flex mt-4">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    
                    >헬스장 명</h4> 
                    <div style={{width:"70%"}}>
                    <input  style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
              </div>  
              <div className="d-flex mt-4">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >사업자번호</h4> 
                    <div style={{width:"70%"}}>
                    <input  style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
              </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >지역 선택</h4> 
                    <div style={{width:"70%"}}>
                    <div className="input-group"
                    style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>
                        <input type="text" aria-label="First name" placeholder="시" className="form-control" style ={{borderBlockEndWidth:"4px"}}/>
                        <input type="text" aria-label="Last name"placeholder="군/구" className="form-control" style ={{borderBlockEndWidth:"4px"}}/>
                    </div>    
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >주소</h4> 
                   <div style={{width:"70%"}}>
                    <div style={{width:"70%"}}>
                    <input style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >전화 번호</h4> 
                   <div style={{width:"70%"}}>
                    <input style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >운영 시간</h4> 
                    <div style={{width:"70%"}}>
                    <input style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >부가서비스</h4> 
                    <div style={{width:"70%"}}>
                        <input placeholder=" 부가 서비스등을 작성 해주세요 ex)샤워, 와이파이 등등" style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                </div>
                <div className="mt-3 d-flex">
                    <h4
                    className="col text-nowrap text-center"
                    style ={{width : "200px"}}
                    >강사 서비스</h4> 
                    <div style={{width:"70%"}}>
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
                </div>
                <div className="mt-3 d-flex">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >강사 소개</h4> 
                    {/* <div style={{width:"70%"}}> */}
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
                    {/* </div> */}
                </div>
                <h3 
                    className="col mt-4 text-nowrap text-center"
                    style ={{width : "239px"}}
                    >가 격
                </h3> 
                <div className="mt-3 ms-5 d-flex">
                    <table className="ms-5" >
                        <thead>
                        <th className="text-center me-3">-</th>
                            <th className="text-center">1Day</th>
                            <th className="text-center">3Day</th>
                            <th className="text-center">7Day</th>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="text-center"><h5>헬스장</h5></td>
                                <td>
                                    <input className="ms-4"  type="text" style={{width:"180px"}}></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td className="text-center"><h5>PT</h5></td>
                                <td>
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td className="text-center"><h5>요가</h5></td>
                                <td>
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5 ">
                                <td className="text-center"><h5>필라테스</h5></td>
                                <td >
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="mt-3 ms-5 d-flex">
                    <table className="ms-5" >
                        <thead>
                        <th className="text-center">-</th>
                            <th className="text-center">1달</th>
                            <th className="text-center">3달</th>
                            <th className="text-center">6달</th>
                            <th className="text-center">12달</th>
                        </thead>
                        <tbody>
                            <tr className="justify-content-between">
                                <td className="text-center text-nowrap"><h5>헬스장</h5></td>
                                <td>
                                    <input className="ms-4"type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td className="text-center"><h5>PT</h5></td>
                                <td>
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5">
                                <td className="text-center"><h5>요가</h5></td>
                                <td>
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            <tr className="mt-5 ">
                                <td className="text-center me-5 text-nowrap"><h5>필라테스</h5></td>
                                <td >
                                    <input className="ms-4" type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                                <td>
                                    <input type="text"></input>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="d-grid mt-3  d-md-flex justify-content-center">
                    <button className="btn btn-primary mb-3" type="button">등록하기</button>
                </div>

            </div>
            </body>
            </Layout>
        );
};
export default Create;

