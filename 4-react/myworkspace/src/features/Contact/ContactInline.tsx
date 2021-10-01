import {useState, useRef, useEffect} from 'react'
import produce from 'immer'

interface ContactItemState{
id : number;
name : string | undefined;
phone : string | undefined;
mail : string | undefined;
isEdit? : boolean;
key?:number;

}
interface ContactItemResponse{
  id : number;
  name : string | undefined;
  phone : string | undefined;
  mail : string | undefined;
  
  }


const Contact =()=>{
  const [result, setResult] =useState<ContactItemState[]>([])

  const FormRef = useRef<HTMLFormElement>(null);
  const NameRef = useRef<HTMLInputElement>(null);
  const PhoneRef=useRef<HTMLInputElement>(null);
  const MailRef=useRef<HTMLInputElement>(null);
  const cardRef=useRef<HTMLTableSectionElement>(null);

  const fetchData = async () =>{
    const res = await fetch("http://localhost:8080/contacts");
    const data : ContactItemResponse[] = await res.json();

    const contacts = data.map((item)=> ({
      id: item.id,
      name : item.name,
      phone : item.phone,
      mail : item.mail,
    })) as ContactItemState[];
    setResult(contacts);
  };
  useEffect(()=> {
    fetchData();
  }, []);

  const add =()=>{
    const name=NameRef.current?.value;
    const phone=PhoneRef.current?.value;
    const mail=MailRef.current?.value;

    const todo:ContactItemState={
      id:result.length > 0 ? result[0].id + 1 : 1,
      name : name,
      phone : phone,
      mail : mail

    }
    setResult(
      produce((state) => {
        state.unshift(todo)
      })
    )
  }
  FormRef.current?.reset();

  const del = (id : number) =>{
    setResult(result.filter((item)=>item.id !== id));
  };

  const edit =(id : number, mod : boolean)=>{
    setResult(
      produce((state)=>{
        const item = state.find((item) => item.id === id);
        if(item){
          item.isEdit =mod;
          // item.id = editItem.current?.id;
        }
      })
    )
   
  }
  const save = (editItem: ContactItemState) => {
    setResult(
      produce((state) => {
        const item = state.find((item) => item.id === editItem.id);
        if (item) {
          item.name = NameRef.current?.value;
          item.phone = PhoneRef.current?.value;
          item.mail = MailRef.current?.value;
          item.isEdit = false;
        }
      })
      );
    };

  return (
    <>
    <h2 className="text-center my-3 me-5 ">연락처</h2>
    <form ref={FormRef} style={{width : "600px"}} className="d-flex mx-auto">    
     <input ref={NameRef} type="text" className="form-control me-1" placeholder="이름.." />
      <input ref={PhoneRef} type="text" className="form-control me-1" placeholder="연락처.." /> 
      <input ref={MailRef} type="text" className="form-control me-1" placeholder="E-MAIL.." /> 
    <button type = "button" className="btn btn-primary text-nowrap" onClick={(e)=>{e.preventDefault();add()}}>추가</button>
    </form>
    <table className="table table-striped mt-2 mx-auto" style={{width : "600px"}}>
      <thead>
        <tr className ="text-center my-2" >
          <th >이름</th>
          <th >연락처</th>
          <th >E-MAIL</th>
          <th >작업</th>
        </tr>        
      </thead>
      <tbody ref={cardRef}>
        {result.map((item, index)=>(
          <>
            <tr className ="text-center my-2" key={index}>   
          {!item.isEdit &&(
            <>
              <td>
                {item.name}
              </td>
              <td>            
                {item.phone}
              </td>
              <td> 
                {item.mail} 
              </td>
              </>
              )}
              {item.isEdit &&(
                <>
                <td>
                <input ref={NameRef} type="text" className="form-control me-1" defaultValue={item.name} />
                </td>
                <td>
                <input ref={PhoneRef} type="text" className="form-control me-1" defaultValue={item.phone} /> 
                </td>
                <td>
                <input ref={MailRef} type="text" className="form-control me-1" defaultValue={item.mail} /> 
                </td>
                </>
              )}
              <td className="d-flex">
                {!item.isEdit &&(
                  <>
              <button 
                className="link-secondary fs-8 me-1 text-nowrap"
                onClick={()=>{edit(item.id,true)}}
                >수정
                </button> 
                <button 
                className="link-secondary fs-8 text-nowrap"
                onClick={()=>{del(item.id)}}
                >삭제</button> 
                </>
                )}
                {item.isEdit &&(
                  <>
                  <button 
                  className="link-secondary fs-8 me-1 text-nowrap"
                  onClick={()=>{save(item)}}
                  >저장</button>
                  <button
                  className="link-secondary fs-8 text-nowrap"
                  onClick={()=>{del(item.id)}}
                  >취소</button>
                  </>
                )}
                </td>
            </tr>
          </>
            )
          ) 
        }
      </tbody>
    </table>
    </>
  )
}

export default Contact;