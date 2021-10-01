import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useHistory, useParams } from "react-router";
import { requestRemoveContacts } from "./contactSaga";
import { useEffect } from "react";

const ContactDetail = ()=> {
  const {id} = useParams<{id : string}>();

  const ContactItem = useSelector(
    (state : RootState) => state.contact.data.find(item => item.id === +id))


  const isRemoveCompleted = useSelector(
    (state:RootState) => state.contact.isRemoveCompleted
  );

  const history=useHistory();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    isRemoveCompleted && history.push("/contacts");
  },[isRemoveCompleted, history])

  const del = ()=>{
    dispatch(requestRemoveContacts(+id));
    
    
  }

  return( 
    <>
    {}
    <div style={{ width: "40vw" }} className="mx-auto">
    <h4 className="text-center">추가</h4>
    <form className="mt-5">
      <div className=" mb-3 d-flex">
        <h4  
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >이름</h4>
        <p className="form-control" >{ContactItem?.name}</p>
      </div>
      <div className=" mb-3 d-flex" >
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >전화번호</h4>
        <p 
        className="form-control "
         >
           {ContactItem?.phone}
         </p>
      </div>
      <div className=" mb-3 d-flex">
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >메일</h4>
        <p className="form-control">
        {ContactItem?.mail}
        </p>
      </div>
      <div className=" mb-3 d-flex text-center">
        <h4 
        className=" me-3 text-nowrap "
        style ={{width : "200px"}}
        >메모</h4>
        <p className="form-control">
        {ContactItem?.memo}
        </p>
      </div>
    </form>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button onClick={()=>{history.push("/contacts")}} >목록</button>
    <button onClick={()=>{history.push(`/contacts/edit/${id}`)}} className="btn btn-primary">수정</button>
    <button onClick={()=>{del()}} className="btn btn-danger">삭제</button>
    </div>
    </div>
    </>
  )
}

export default ContactDetail;