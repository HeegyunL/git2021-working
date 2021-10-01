import { useSelector,useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router"
import { RootState,AppDispatch } from "../../store";
import { useRef } from "react";
import { editContact } from "./ContactSlice";

const ContactEdit =()=>{
  const {id} = useParams<{id : string}>();
  const ContactData = useSelector(
    (state : RootState) => state.contact.data.find(item => item.id === +id))

  const dispatch = useDispatch<AppDispatch>();
  const history=useHistory();

  const nameRef = useRef<HTMLTextAreaElement>(null);
  const phoneRef = useRef<HTMLTextAreaElement>(null);
  const mailRef = useRef<HTMLTextAreaElement>(null);
  const memoRef = useRef<HTMLTextAreaElement>(null);
  const modifyTime = new Date().getTime();

  const editPage =()=>{

    if(ContactData){
    const item = {...ContactData};
      item.id= +id;
      item.name = nameRef.current ? nameRef.current.value : "";
      item.phone = phoneRef.current ? phoneRef.current.value : "";
      item.mail = mailRef.current ? mailRef.current.value : "";
      item.memo = memoRef.current ? memoRef.current.value : "";
      item.createdTime = modifyTime;
      dispatch(editContact(item));
      history.push("/contacts")
    }
  }
  
  


  return(
    <div style={{ width: "40vw" }} className="mx-auto">
      <h1 className="text-center">수정</h1>
      <form className="mt-5">
      <div className=" mb-3 d-flex">
        <h4  
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >이름</h4>
        <textarea className="form-control" defaultValue={ContactData?.name} ref ={nameRef} ></textarea>
      </div>
      <div className=" mb-3 d-flex" >
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >전화번호</h4>
        <textarea 
        className="form-control "
        defaultValue={ContactData?.phone} 
        ref ={phoneRef}
         ></textarea>
      </div>
      <div className=" mb-3 d-flex">
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >메일</h4>
        <textarea className="form-control" defaultValue={ContactData?.mail} ref ={mailRef} ></textarea>
      </div>
      <div className=" mb-3 d-flex text-center">
        <h4 
        className=" me-3 text-nowrap "
        style ={{width : "200px"}}
        >메모</h4>
        <textarea className="form-control"defaultValue={ContactData?.memo} ref ={memoRef} ></textarea>
      </div>
      </form>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button onClick={()=>history.push("/contacts")} className="me-2">목록</button>
        <button onClick={()=>{editPage();}}>저장</button>
      </div>
    </div>
  )
}
export default ContactEdit