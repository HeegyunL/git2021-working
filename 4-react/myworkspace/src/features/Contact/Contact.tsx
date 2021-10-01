
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import  { requestFetchContacts } from './contactSaga';

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
}; 
const modifyTime = new Date().getTime();

const Contact =()=>{
  const contact = useSelector((state : RootState)=> state.contact);
  const history= useHistory();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if(!contact.isFetched){
      dispatch(requestFetchContacts());
    }
  },[dispatch, contact.isFetched]);


  return (
    <>
    <h2 className="text-center my-3 me-5 ">연락처</h2>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-primary me-md-2" type="button" onClick={()=>{history.push("/contacts/create")}}>추가</button>
      <button className = "btn btn-secondary me-2" onClick={()=>{dispatch(requestFetchContacts())}}>
        <i className="bi bi-arrow-clockwise"></i>
        새로고침
      </button>
    </div>
    <table className="table table-striped mt-2 mx-auto" style={{width : "100%"}}>
      <thead>
        <tr className ="text-center my-2" >
          <th scope="col" >작업</th>
          <th scope="col" >이름</th>
          <th scope="col">연락처</th>
          <th scope="col">E-MAIL</th>
          <th scope="col">작성일시</th>
        </tr>
      </thead>
      <tbody >
        {contact.data.map((item, index)=>(
           <tr className ="text-center my-2"
           onClick={()=>{history.push(`/contacts/detail/${item.id}`)}}
           key={`contact-item-${index}`}
           >  
            <td >
            {item.id}
          </td >
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
          {getTimeString(modifyTime)}
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