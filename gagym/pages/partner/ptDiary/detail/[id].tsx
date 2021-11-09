import Layout from "../../../../components/layout"

const PTdetail = ()=>{
    return(
        <Layout>
            <body>
                <div className="mx-auto mt-5" style={{width:"850px"}}>
                <h4 className="mt-5 text-center"> PT 일지</h4>
                    <div className="d-flex mt-5">
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
                        >아침 식단</h4> 
                       <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 사과 2쪽 , 계란 4개</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >점심 식단</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}>된짱찌개</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >저녁 식단</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 삼겹살 냠냠</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >운동 내역</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 벤치 60키로 5x5,이두 5x5, </p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >문의 사항</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 하체중심으로 자세교정가능하신가요??</p>
                    </div> 
                    <div className="d-flex mt-3">
                        <h4 
                        className="col me-3 text-nowrap text-center"
                        style ={{width : "200px"}}
                        >피드백</h4> 
                        <p style ={{width : "400px", height:"45px", borderBlockEndWidth:"4px"}}> 물론이죠 돈내셨으니 해드려야죠</p>
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
export default PTdetail;