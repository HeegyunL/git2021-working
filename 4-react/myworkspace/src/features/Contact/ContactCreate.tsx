import { useHistory } from "react-router-dom";
import{useRef } from "react"
import { RootState,AppDispatch } from "../../store";
import { ContactItem } from "./ContactSlice";
import { useSelector,useDispatch } from "react-redux";
import { requestAddContact } from "./contactSaga";

const ContactCreate =()=>{

const ContactData = useSelector((state: RootState) => state.contact.data);

const nameRef = useRef<HTMLTextAreaElement>(null);
const phoneRef = useRef<HTMLTextAreaElement>(null);
const mailRef = useRef<HTMLTextAreaElement>(null);
const memoRef = useRef<HTMLTextAreaElement>(null);

const dispatch = useDispatch<AppDispatch>();

const modifyTime = new Date().getTime();
const history = useHistory();

const add =()=>{
  const name=nameRef.current?.value;
  const phone=phoneRef.current?.value;
  const mail=mailRef.current?.value;
  const memo = memoRef.current?.value;

  const item:ContactItem={
    id:ContactData.length > 0 ? ContactData[0].id + 1 : 1,
    name : name ? name : "",
    phone : phone ? phone : "",
    mail : mail ? mail : "",
    memo : memo ? memo : "",
    createdTime : modifyTime
  }
  //redux action
  // dispatch(addContact(item));

  //saga action
  dispatch(requestAddContact(item));
  history.push("/contacts");

  
}

  return(
    <>
    <div style={{ width: "40vw" }} className="mx-auto">
    <h4 className="text-center">추가</h4>
    <form className="mt-5">
      <div className=" mb-3 d-flex">
        <h4  
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >이름</h4>
        <textarea className="form-control" placeholder="Name" ref={nameRef}></textarea>
      </div>
      <div className=" mb-3 d-flex" >
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >전화번호</h4>
        <textarea 
        className="form-control "
         placeholder="Phone" 
         ref={phoneRef}></textarea>
      </div>
      <div className=" mb-3 d-flex">
        <h4 
        className=" me-3 text-nowrap text-center"
        style ={{width : "200px"}}
        >메일</h4>
        <textarea className="form-control" placeholder="Mail" ref={mailRef}></textarea>
      </div>
      <div className=" mb-3 d-flex text-center">
        <h4 
        className=" me-3 text-nowrap "
        style ={{width : "200px"}}
        >메모</h4>
        <textarea className="form-control" placeholder="Memo" ref={memoRef}></textarea>
      </div>
    </form>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <button onClick={()=>history.push("/contacts")} className="me-1">목록</button>
    <button  onClick={()=>{add()}}>추가</button>
    </div>
    </div>
    </>
  )
}

export default ContactCreate;