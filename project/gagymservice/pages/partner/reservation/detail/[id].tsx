import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../../components/layout"
import { AppDispatch, RootState } from "../../../../provider";

const PTdetail = ()=>{

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const id = router.query.id as string;
    
    let reservationItem = useSelector((state : RootState)=>state.diary.data.find((item)=>item.id === +id)) 


    return(
        <Layout>
            {reservationItem&&(
            <body>
                <div className="mx-auto mt-5" style={{width:"850px"}}>
                <h4 className="mt-5 text-center"> 예약 내역</h4>
                    <div className="d-flex mt-5">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >예약 번호</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 1235</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >이름</h4> 
                       <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 이말년</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >연락처</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 010-2834-2384</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >희망 이용권</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> PT1회이용권</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >희망 강사</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 이두근</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >문의 사항</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 하체중심으로 자세교정가능하신가요??</p>
                    </div> 
                    <div className="d-grid mt-3  d-md-flex justify-content-between">
                    <button className="btn btn-primary mb-3" type="button">응답</button>
                    <button className="btn btn-primary mb-3" type="button">목록</button>
                </div>
                </div>
            </body>
            )}
        </Layout>
    )
}
export default PTdetail;