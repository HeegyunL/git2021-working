import {useState, useRef, useEffect} from 'react'
import produce from 'immer'

import api from './contactApi';

interface ContactItemState{
id : number;
name : string | undefined;
phone : string | undefined;
mail : string | undefined;
isEdit? : boolean;
key?:number;

}

const Contact =()=>{
  const [result, setResult] =useState<ContactItemState[]>([])

  const FormRef = useRef<HTMLFormElement>(null);
  const NameRef = useRef<HTMLInputElement>(null);
  const PhoneRef=useRef<HTMLInputElement>(null);
  const MailRef=useRef<HTMLInputElement>(null);
  const cardRef=useRef<HTMLTableSectionElement>(null);

  const fetchData = async () =>{
    const res = await api.fetch();

    const contacts = res.data.map((item)=> ({
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

  const add =async ()=>{

    const result = await api.add({
      name : NameRef.current?.value , 
      phone : PhoneRef.current?.value,
      mail : MailRef.current?.value 
    
    });

    const todo:ContactItemState={
      id:result.data.id,
      name : result.data.name,
      phone : result.data.phone,
      mail : result.data.mail


    }
    setResult(
      produce((state) => {
        state.unshift(todo)
      })
    )
    FormRef.current?.reset();
  }

  const del = async (id : number, index : number) =>{
    const result = await api.remove(id);
    console.log(result.status)

    setResult(
      produce((state) => {
        state.splice(index, 1);
     }
    )
   )
  }

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
  const save = async (id: number, index:number) => {
    const input = cardRef.current
    ?.querySelectorAll("td")
    [index].querySelector("input");

    const result = await api.modify(id,{
      name : input?.value,
      phone : input?.value,
      mail : input?.value,
      
    })

    setResult(
      produce((state) => {
        const item = state.find((item) => item.id === id);
        if (item) {
          item.name = result.data.name;
          item.phone = result.data.phone;
          item.mail = result.data.mail;
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
    <button type = "button" 
      className="btn btn-primary text-nowrap" 
      onClick={()=>{add()
      }}
      >
        추가
    </button>
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
            <tr className ="text-center my-2" key={item.id}>   
          {!item.isEdit &&(
            <>
              <td >
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
                onClick={()=>{del(item.id, index)}}
                >삭제</button> 
                </>
                )}
                {item.isEdit &&(
                  <>
                  <button 
                  className="link-secondary fs-8 me-1 text-nowrap"
                  onClick={()=>{save(item.id, index)}}
                  >저장</button>
                  <button
                  className="link-secondary fs-8 text-nowrap"
                  onClick={()=>{edit(item.id , false)}}
                  >취소</button>
                  </>
                )}
                </td>
            </tr>
            )
          ) 
        }
      </tbody>
    </table>
    </>
  )
}

export default Contact;