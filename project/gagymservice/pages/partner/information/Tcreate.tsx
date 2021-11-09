
import { useRef } from "react";
import Layout from "../../../components/layout";
import React from "react";
import { TrainerItem } from "../../../provider/modules/trainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../provider";
import { requestAddTrainer } from "../../../middleware/modules/trainer";
import { useEffect } from "react";
import router from "next/router";
import { Image } from "react-bootstrap";
const Tcreate =()=>{




    const trainerNameRef=useRef<HTMLInputElement>(null);
    const trainerIntroRef=useRef<HTMLInputElement>(null);
    const trainerPhotoUrlRef=useRef<HTMLInputElement>(null);

    const trainerPTRef=useRef<HTMLInputElement>(null);
    const trainerPilatesRef=useRef<HTMLInputElement>(null);
    const trainerYogaRef=useRef<HTMLInputElement>(null);

    const pt1TimePriceRef=useRef<HTMLInputElement>(null);
    const pt10TimePriceRef=useRef<HTMLInputElement>(null);
    const pt30TimePriceRef=useRef<HTMLInputElement>(null);

    const yoga1TimePriceRef=useRef<HTMLInputElement>(null);
    const yoga10TimePriceRef=useRef<HTMLInputElement>(null);
    const yoga30TimePriceRef=useRef<HTMLInputElement>(null);

    const pilates1TimePriceRef=useRef<HTMLInputElement>(null);
    const pilates10TimePriceRef=useRef<HTMLInputElement>(null);
    const pilates30TimePriceRef=useRef<HTMLInputElement>(null);
    
    const partnerData= useSelector((state:RootState)=> state.partner.data)

    const isAddCompleted = useSelector(
        (state:RootState)=> state.partner.isAddCompleted
    );
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("--isAddCompleted 변경: " + isAddCompleted);
        isAddCompleted && router.push("/partner/information/detail");
    },[isAddCompleted, dispatch]);

    const handleAddClick =()=>{
        if(trainerPhotoUrlRef.current?.files?.length){
        const imageFile = trainerPhotoUrlRef.current.files[0];
        const reader = new FileReader();
        reader.onload=()=>{
        const item : TrainerItem={
            id: partnerData.length ? partnerData[0].id+1 : 1,
            trainerName:trainerNameRef.current ? trainerNameRef.current.value : "",
            trainerIntro:trainerIntroRef.current ? trainerIntroRef.current.value : "",
            trainerPhotoUrl:reader.result ? reader.result.toString() : "",
            pt1TimePrice:pt1TimePriceRef.current ? pt1TimePriceRef.current.value : "",
            pt10TimePrice:pt10TimePriceRef.current ? pt10TimePriceRef.current.value : "",
            pt30TimePrice:pt30TimePriceRef.current ? pt30TimePriceRef.current.value : "",
            yoga1TimePrice:yoga1TimePriceRef.current ? yoga1TimePriceRef.current.value : "",
            yoga10TimePrice:yoga10TimePriceRef.current ? yoga10TimePriceRef.current.value : "",
            yoga30TimePrice:yoga30TimePriceRef.current ? yoga30TimePriceRef.current.value : "",
            pilates1TimePrice:pilates1TimePriceRef.current ? pilates1TimePriceRef.current.value : "",
            pilates10TimePrice:pilates10TimePriceRef.current ? pilates10TimePriceRef.current.value : "",
            pilates30TimePrice:pilates30TimePriceRef.current ? pilates30TimePriceRef.current.value : "",
        }
        dispatch(requestAddTrainer(item))
      }
    reader.readAsDataURL(imageFile)
     }          
    }
    return(
        <Layout>
            <body>
                <div className="mx-auto" style={{width:"850px"}}>
                <h4 className="mt-5 text-center"> 등록 하기</h4>
                {/* 강사 이름 */}
                <div className="d-flex mt-4">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >강사 이름</h4> 
                    <div style={{width:"70%"}}>
                    <input ref={trainerNameRef} style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                </div>  
                {/* 한줄 소개 */}
                <div className="d-flex mt-4">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >한줄 소개</h4> 
                    <div style={{width:"70%"}}>
                    <input ref={trainerIntroRef} style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}></input>
                    </div>
                </div>
                {/* 사진 */}
                <div className="d-flex mt-4">
                    <h4 
                    className="col me-3 text-nowrap text-center"
                    >사진</h4> 
                    <div style={{width:"70%"}}>
                      <div className=" mb-3">
                        <input ref={trainerPhotoUrlRef} style ={{width : "400px"}} type="file" className="form-control" accept="image/*" />
                        <Image style={{ width: "50%" }} src="/logo.png" alt="trainerPhoto" />
                      </div>
                    </div>
                </div>
                {/* 강사 서비스 */}
                <div className="mt-3 d-flex">
                    <h4
                    className="col text-nowrap text-center"
                    style ={{width : "200px"}}
                    >강사 서비스</h4> 
                    <div style={{width:"70%"}}>
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group"
                        style ={{width : "400px"}}>
                            <input  
                                type="checkbox" 
                                className="btn-check" 
                                name="ptService" 
                                id="PT"     
                                autoComplete="off"
                                onClick={()=>('getCheckboxValue()')}
                                />
                            <label 
                                className="btn btn-outline-primary" 
                                htmlFor="PT">PT</label>

                            <input 
                                type="checkbox" 
                                className="btn-check" 
                                name="ptService" 
                                id="Pilates" 
                                autoComplete="off" 
                                onClick={()=>('getCheckboxValue()')}
                                />
                            <label className="btn btn-outline-primary" htmlFor="Pilates">필라테스</label>

                            <input 
                                type="checkbox" 
                                className="btn-check" 
                                name="ptService" 
                                id="Yoga" 
                                autoComplete="off" 
                                onClick={()=>('getCheckboxValue()')}
                                />
                            <label className="btn btn-outline-primary" htmlFor="Yoga">요가</label>
                        </div>
                        <div>
                        <div id='result'></div>
                        </div>
                    </div>
                </div>
               {/* 가격 */}
               <div>
                <h3 
                    className="col mt-4 text-nowrap text-center"
                    style ={{width : "239px"}}
                    >가 격
                </h3> 
                <div className="mt-3 ms-5 d-flex">
                    <table className="ms-5" >
                        <thead>
                        <th className="text-center me-3"></th>
                            <th className="text-center">1Day</th>
                            <th className="text-center">3Day</th>
                            <th className="text-center">7Day</th>
                        </thead>
                        <tbody>
                            <tr >
                                <td className="text-center"><h5>PT</h5></td>
                                <td>
                                    <input ref={pt1TimePriceRef}className="ms-4"  type="text" style={{width:"180px"}}></input>
                                </td>
                                <td>
                                    <input ref={pt10TimePriceRef} type="text"></input>
                                </td>
                                <td>
                                    <input ref={pt30TimePriceRef} type="text"></input>
                                </td>
                            </tr>
                            <tr >
                                <td className="text-center"><h5>요가</h5></td>
                                <td>
                                    <input ref={yoga1TimePriceRef}className="ms-4"  type="text" style={{width:"180px"}}></input>
                                </td>
                                <td>
                                    <input ref={yoga10TimePriceRef} type="text"></input>
                                </td>
                                <td>
                                    <input ref={yoga30TimePriceRef} type="text"></input>
                                </td>
                            </tr>
                            <tr >
                                <td className="text-center"><h5>필라테스</h5></td>
                                <td>
                                    <input ref={pilates1TimePriceRef} className="ms-4"  type="text" style={{width:"180px"}}></input>
                                </td>
                                <td>
                                    <input ref={pilates10TimePriceRef}type="text"></input>
                                </td>
                                <td>
                                    <input ref={pilates30TimePriceRef} type="text"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                </div>
                {/* 등록 버튼 */}
                <div className="d-grid mt-3  d-md-flex justify-content-center">
                    <button className="btn btn-primary mb-3" type="button" 
                     onClick={() => {
                        handleAddClick();
                      }}>등록하기</button>
                </div>
            </div>
            </body>
            </Layout>
        );
};
export default Tcreate;

