import {useState, useRef} from 'react'
import produce from 'immer'

interface resultState{
id : number;
name : string | undefined;
phone : string | undefined;
mail : string | undefined;
}
interface modalState{
  item : resultState;
onClose : ()=>void;
onSave : (editItem : resultState)=>void
}

const ContactEditModal=({onClose,item,onSave} : modalState)=>{
  const NameRef = useRef<HTMLInputElement>(null);
  const PhoneRef=useRef<HTMLInputElement>(null);
  const MailRef=useRef<HTMLInputElement>(null);

  const save =()=>{
    const todo:resultState={
      id:item.id,
      name : NameRef.current?.value,
      phone : PhoneRef.current?.value,
      mail : MailRef.current?.value,
    }    
  onSave(todo)
  }
  return(
  <div className="modal d-block" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title fs-4">수정</h5>
        <button type="button" 
        className="btn-close"  
        aria-label="Close"
        onClick={()=>onClose()} >          
        </button>
      </div>
      <div className="modal-body">
        <div className ="d-flex">
        <p className="me-4">
            {item.name}
        </p>
        <p className="me-4">       
            {item.phone}
        </p>
        <p className="">       
            {item.mail} 
        </p>
        </div>
        <input ref={NameRef} type="text" className="form-control mt-1" placeholder="이름.." />
      <input ref={PhoneRef} type="text" className="form-control mt-1" placeholder="연락처.." /> 
      <input ref={MailRef} type="text" className="form-control mt-1" placeholder="E-MAIL.." />
      </div>
      <div className="modal-footer">
        <button type="button"
         className="btn btn-secondary" 
         onClick={()=>onClose()} >
           닫기
           </button>
        <button
         type="button"
          className="btn btn-primary"
          onClick={()=>save()}>
            저장</button>
      </div>
    </div>
  </div>
</div>
  )
}

const Contact =()=>{
  const [result, setResult] =useState<resultState[]>([])
  const FormRef = useRef<HTMLFormElement>(null);
  const NameRef = useRef<HTMLInputElement>(null);
  const PhoneRef=useRef<HTMLInputElement>(null);
  const MailRef=useRef<HTMLInputElement>(null);

  const [isEdit, setIsEdit] =useState(false);
  const add =()=>{
    const name=NameRef.current?.value;
    const phone=PhoneRef.current?.value;
    const mail=MailRef.current?.value;

    const todo:resultState={
      id:result.length > 0 ? result[0].id + 1 : 1,
      name : name,
      phone : phone,
      mail : mail
    }
    setResult([todo,...result])
  }
  FormRef.current?.reset();

  const del = (id : number) =>{
    setResult(result.filter((item)=>item.id !== id));
  };
  const editItem=useRef<resultState>({id:0, name:"" ,phone:"", mail:""});

  const edit =(item : resultState)=>{
    setIsEdit(true);
    editItem.current=item;
  }
  const save = (editItem: resultState) => {
    setResult(
      produce((state) => {
        const item = state.find((item) => item.id === editItem.id);
        if (item) {
          item.name = editItem.name;
          item.phone = editItem.phone;
          item.mail = editItem.mail;
        }
      })
      );
      setIsEdit(false)
    };

  return (
    <>
    <h2 className="text-center my-3 me-5 ">연락처</h2>
    {isEdit && 
    <ContactEditModal
    item ={editItem.current} 
    onSave={(editItem) => {
      save(editItem);}}
    onClose ={()=>setIsEdit(false)}
    />}
    

    <form ref={FormRef} style={{width : "600px"}} className="d-flex">    
     <input ref={NameRef} type="text" className="form-control me-1" placeholder="이름.." />
      <input ref={PhoneRef} type="text" className="form-control me-1" placeholder="연락처.." /> 
      <input ref={MailRef} type="text" className="form-control me-1" placeholder="E-MAIL.." /> 
    <button type = "button" className="btn btn-primary text-nowrap" onClick={(e)=>{e.preventDefault();add()}}>추가</button>
    </form>
    <table className="table table-striped mt-2" style={{width : "600px"}}>
      <thead>
        <tr className ="text-center my-2" >
          <th scope="col">이름</th>
          <th scope="col">연락처</th>
          <th scope="col">E-MAIL</th>
          <th scope="col">작업</th>
        </tr>
      </thead>
      <tbody >
        {result.map((item)=>(
           <tr className ="text-center my-2">  
          <td >
              {item.name}
          </td >
          <td>       
              {item.phone}
          </td>
          <td>       
              {item.mail} 
          </td>
          <td>       
          <button 
            className="link-secondary fs-8 me-1"
            onClick={()=>{edit(item)}}
            >수정
            </button> 
            <button 
            className="link-secondary fs-8 "
            onClick={()=>{del(item.id)}}
            >삭제</button> 
          </td>
        </tr>
        )
        )}
      </tbody>
    </table>
    </>
  )
}

export default Contact;