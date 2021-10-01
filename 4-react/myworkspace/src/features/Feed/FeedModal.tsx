import { useRef, useState } from 'react'
import produce from 'immer';
import { FeedState } from "../Feed/type";
import { useSelector } from 'react-redux';
import { RootState} from "../../store"

import style from "../Profile/Profile.module.scss";
import { ProfileState } from '../Profile/profileSlice';
import { addEmitHelper } from 'typescript';


interface ModalProp{
  onClose : () => void
  item : FeedState
  onSave : (editItem:FeedState)=>void
}

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};



const FeedEditModal =({onClose , item, onSave} : ModalProp )=>{
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const save =()=>{
    if(imgRef.current?.files?.length){
    const file = imgRef.current?.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      const DataURL = reader.result;
      let Media= ""
      
      const todo: FeedState = {
        id: item.id,
        memo: inputRef.current?.value,
        dataURL : DataURL?.toString(),
        type : file.type,
        createTime: new Date().getTime(),
        media : Media,
        username : item.username
      };
      onSave(todo);    
    };
  };
  }
  return(
  <div className="modal d-block"  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" 
          className="btn-close" 
           aria-label="Close"
           onClick={()=>{onClose()}}>

           </button>
        </div>
        <div className="modal-body">
          {item.type && item.type ==="video/mp4" ?
          <video src={item.dataURL} 
          className="card-img-top"  controls /> :
          <img src={item.dataURL} alt={item.dataURL}
          className="card-img-top"   /> }       
          <input 
          ref={imgRef}
          className="form-control me-1" 
          accept='image/*, video/mp4'
          type="file"   />
          <textarea
            defaultValue={item.memo}
            placeholder="수정할 값을 입력하시오"
            className="w-100"
            ref={inputRef}
          />
        </div>
        <div className="modal-footer">
          <button type="button" 
          className="btn btn-secondary" 
          onClick={()=>{onClose()}}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={()=>{save()}}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
};

const Feed = () => {
  const profile = useSelector((state : RootState) => state.profile)
  const [result, setResult] = useState<FeedState[]>([]);


  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [isEdit, setIsEdit]= useState(false);
  
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

      };
      setResult(produce((state)=>{
        state.unshift(todo)
      }));   
    }
    }
    formRef.current?.reset(); 
  };

  const del = (id: number) => {
    setResult(result.filter((item) => item.id !== id));
  }; 
  const editItem =useRef<FeedState>({id : 0 , memo : "",dataURL :"" , type: "" ,createTime:0, media: "", username:profile.username});

  const edit =(item : FeedState)=>{
    setIsEdit(true);
    editItem.current = item;
  }

  const save = (editItem: FeedState) => {
    setResult(
      produce((state) => {
        const item = state.find((item) => item.id === editItem.id);
        if (item) {
          item.memo = editItem.memo;
          item.dataURL = editItem.dataURL;
          item.type = editItem.type;
          item.media = editItem.media;
          item.username=editItem.username
          item.image = editItem.image
        }
      })
    );

    // 모달창 닫기
    setIsEdit(false);
  };



  return (
    <>
        {isEdit && 
        <FeedEditModal 
        item = {editItem.current}
        onSave={(editItem) => {
          save(editItem);}}
        onClose={()=>{setIsEdit(false)}} />}
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
      
    { result.map((item)=>(
    
    <div className="card mt-2" style={{width: "650px"}} key={item.id}>
      <div className="d-flex">
        {/* 프로필이름,사진 */}
        <div 
            className={`${style.thumb} me-1`}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <span  id="cardProfile"className={`${style.username} text`}>
            {item.username}
          </span>
      {/* <div>
        
        <img
          src={profile.image}
          width={150}
          height={100}
          alt={profile.username}
        />
        <span>{profile.username}</span>
      </div> */}
      </div>
      {item.type && item.type ==="video/mp4" ?
      <video src={item.dataURL} 
         className="card-img-top"  controls /> :
         <img src={item.dataURL} alt={item.dataURL}
         className="card-img-top"   /> }       
        <div className="card-body">
        <p className="card-text">{item.memo}</p>
        <div>
        <span className="link-secondary float-start">
          {getTimeString(item.createTime)}
        </span>
        <button className="link-secondary fs-6 float-end" 
        onClick={()=>{edit(item)}}>수정</button>
        <button className="link-secondary fs-6 float-end" 
        onClick={(e)=>{e.preventDefault();del(item.id)}}>
          삭제
          </button>
        </div>
      </div>
      </div>
     ) 
    )
  }
    </>

  );
};

export default Feed;