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
    axios.get<ContactItemResponse[]>(`${"http://localhost:8080"}/contacts`),

    fetchPaging:(page:number,size:number)=>
    axios.get<ContactPagingReponse>(
      `${"http://localhost:8080"}/contacts/paging?page=${page}&size=${size}`
    ),
    add:(contactItem : ContactItemRequest)=>
    axios.post<ContactItemResponse>(
      `${"http://localhost:8080"}/contacts`,
      contactItem
    ),

    remove:(id:number) =>
    axios.delete<boolean>(`${"http://localhost:8080"}/contacts/${id}`),

    modify:(id:number, contactItem : ContactItemRequest) =>
    axios.put<ContactItemResponse>(
      `${"http://localhost:8080"}/contacts/${id}`,
      contactItem
    )
  
  }
  export default contactApi;