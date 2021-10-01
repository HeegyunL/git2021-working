
import { useState, useRef } from "react";

import { useSelector } from "react-redux";
import { TodoItemState } from "../Todo/type";
import { RootState } from "../../store";

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

interface resultState{
  id : number;
  memo : string | undefined;
  dataURL : string | undefined;
  imgType : string | undefined;
  creatTime : number;

}

const FeedRe =()=>{
  const [result, setResult] = useState<resultState[]>([])

  const formRef=useRef<HTMLFormElement>(null);
  const imgRef=useRef<HTMLInputElement>(null);
  const textRef=useRef<HTMLTextAreaElement>(null);


  const add=()=>{
    if(imgRef.current?.files?.length){
    const file =imgRef.current?.files[0]
    const text = textRef.current?.value;
    const imgType = file.type;
    const time = new Date().getTime();
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.onload=()=>{
      const DataURL = reader.result;

      const todo : resultState ={
        id : result.length >0 ? result[0].id +1 :1,
        dataURL : DataURL?.toString(),
        memo :text,
        imgType : imgType,
        creatTime : time,
      }
      setResult([todo, ...result])
    }
  }
  formRef.current?.reset()
  };
  const del = (id: number) => {
    setResult(result.filter((item) => item.id !== id));
  }; 

  return (
  <>
  <form ref = {formRef}>
    <div>
      <textarea id="textBox"
      className="form-control mb-2 rows-8"
       placeholder="글을 입력하세요" 
       ref ={textRef} />
    </div>
    <div className= " d-flex">
      <input className="form-control me-2"  
      accept="image/png, image/jpeg, image/jpg, video/mp4" 
      type="file" 
      ref={imgRef}
      multiple />
      <button id ="btn"
      type = "button" 
      className="btn btn-primary text-nowrap"
      onClick={()=>{add()}}>
        입력
      </button>
    </div>
  </form>
    {result.map((item)=>
    <div className="card mt-2 text-center" 
    style={{width : "600px"}}>
    <div  >
      {item.imgType  && item.imgType =="video/mp4" ?
      <video src = {item.dataURL} 
      controls
      className="img-fluid rounded mt-1" />
      :
       <img  src={item.dataURL} 
       alt={item.dataURL} 
       className="card-img-top" />
      }
    </div>
        <p className="card-text">{item.memo}</p>
      <div>
        <span className="float-start">{getTimeString(item.creatTime)}</span>
        <a className="link-secondary fs-6 float-end "
        onClick={()=>{del(item.id)}}>
          삭제
        </a>
      </div>
    </div>
    )
  
    }
  </>
  )
}

export default FeedRe;