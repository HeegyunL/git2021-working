
import {useState} from 'react';

const ListItem = ({money}: {money :number}) => {
  return <li style={{color : money < 0 ? "red" : "green"}}>
    {money <0 ? "출금" : "입금"}{money}</li>
}

const AccountManagerRef = () => {

    const [result, setResult] = useState<number[]>([])
  
    const Input =(mod : "Deposit" | "Withdraw") =>{
      const msg = mod === "Deposit" ? "입금" : "출금";
      const insert = prompt(`${msg}하실 금액을 입력하시오`);
  
      let money = 0;
      if(insert){
        money = mod === "Deposit" ? +insert : -insert;
      }
       if(mod ==="Deposit"){
        setResult([money, ...result])
        }else{
         if(check(result, money)){
          setResult([money,...result])
         }else{
           alert("잔액부족");
         }
       }    
    };
    const check = (result : number[] ,money: number) =>{
      let sum = 0;
      if(result.length>0){
        sum = result.reduce((acc, log) => acc + log)
      }

      return sum + money >= 0;
    }
    
  
  

  return (
  <div>
    <button onClick = {() => {
      Input("Deposit");
    }}>입금</button>
    <button onClick = {() => {
      Input("Withdraw");
    }}>출금</button>
    <span>잔액 [{result.reduce((acc, log) => acc + log,0)}]원</span>
    <ul>
      {result.map((money, index)=>(
          <ListItem key={index} money={money} />
        ))
      }
    </ul>
  </div>
  ) 
}
export default AccountManagerRef