import axios from "axios";

export interface ContactPagingReponse{
  content: ContactItemResponse[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
export interface ContactItemResponse{
  id : number;
  name : string | undefined;
  phone : string | undefined;
  mail : string | undefined;
  memo? : string | undefined;
  createdTime? : number ;
  }
  export interface ContactItemRequest{
    name : string | undefined;
    phone : string | undefined;
    mail : string | undefined;
    memo? : string | undefined;
  }

  const contactApi ={
    fetch : ()=>
    axios.get<ContactItemResponse[]>(`${process.env.REACT_APP_API_BASE}/contacts`),

    fetchPaging:(page:number,size:number)=>
    axios.get<ContactPagingReponse>(
      `${process.env.React_APP_API_BASE}/contacts/paging?page=${page}&size=${size}`
    ),
    add:(contactItem : ContactItemRequest)=>
    axios.post<ContactItemResponse>(
      `${process.env.REACT_APP_API_BASE}/contacts`,
      contactItem
    ),

    remove:(id:number) =>
    axios.delete<boolean>(`${process.env.REACT_APP_API_BASE}/contacts/${id}`),

    modify:(id:number, contactItem : ContactItemRequest) =>
    axios.put<ContactItemResponse>(
      `${process.env.REACT_APP_API_BASE}/contacts/${id}`,
      contactItem
    )
  
  }
  export default contactApi;