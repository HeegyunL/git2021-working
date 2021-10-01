import { useRef, useState } from 'react'
import { FeedState } from "../Feed/type";
import { useSelector } from 'react-redux';
import { RootState} from "../../store"

import style from "../Profile/Profile.module.scss";


const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const Feed = () => {
  const profile = useSelector((state : RootState) => state.profile)
  const [result, setResult] = useState<FeedState[]>([]);


  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  
  
  const add = () => {         

    if(imgRef.current?.files?.length){
    const file = imgRef.current?.files[0];
    const text = inputRef.current?.value;
    const imgType = file.type;
    const time = new Date().getTime();
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload=()=>{
      const DataURL = reader.result;
      let Media= ""
      
      const todo: FeedState = {
        id: result.length > 0 ? result[0].id + 1 : 1,
        memo: text,
        dataURL : DataURL?.toString(),
        type : imgType,
        createTime: time,
        media : Media,
        username : profile.username,
        image : profile.image
      };
      setResult([todo, ...result]);   
    }
    }
    formRef.current?.reset();
  };

  const del = (id: number) => {
    setResult(result.filter((item) => item.id !== id));
  }; 
  return (
    <>
      <form
        ref={formRef}
      >
        
        <div>
        <textarea
          className="form-control me-2 row-1"
          placeholder="할 일 ..."
          style={{width : "650px" , boxSizing : "border-box", height:"20vh"}}
          ref={inputRef}
        />
        </div>
        <div 
        className="d-flex mt-2"
        style={{width : "650px"}} >
        <input 
        ref={imgRef}
        className="form-control me-1" 
        accept='image/*, video/mp4'
        type="file"   />
        <button
          type="button"
          className="btn btn-primary text-nowrap"
          onClick={() => {
            add();
          }}
        >
          추가
        </button>
        </div>
      </form>
      
    { result.map(item=> item.type === 'video/mp4'?
    (
    <div className="card mt-2" style={{width: "650px"}} key={item.id}>
      <div className="card-header d-flex">
        <div 
          className={`${style.thumb} me-1`}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <span  id="cardProfile"className={`${style.username} text`}>
          {item.username}
        </span>
      </div>
         <video src={item.dataURL} 
         className="card-img-top"  controls /> 
        <div className="card-body">
        <p className="card-text">{item.memo}</p>
        <div>
        <span className="link-secondary float-start">
          {getTimeString(item.createTime)}
        </span>
        <button className="link-secondary fs-6 float-end" onClick={(e)=>{e.preventDefault();del(item.id)}}>삭제</button>
        </div>
      </div>
      </div>
     ) : 
     <div className="card mt-2" style={{width: "650px"}}  key={item.id}>
       <div className="card-header d-flex">
       <div 
            className={`${style.thumb} me-1`}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <span  id="cardProfile"className={`${style.username} text`}>
            {item.username}
          </span>
            </div>
         <img src={item.dataURL} alt={item.dataURL}
         className="card-img-top" /> 
        <div className="card-body">
        <p className="card-text ">{item.memo}</p>
        <div>
        <span className="link-secondary float-start">
          {getTimeString(item.createTime)}
        </span>
        <button className="link-secondary fs-6 float-end" onClick={(e)=>{e.preventDefault();del(item.id)}}>삭제</button>
        </div>
      </div>
      </div>
    )
  }
    </>
  );
};

export default Feed;