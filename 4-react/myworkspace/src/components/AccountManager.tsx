// 계좌관리

// 입력박스, 버튼 2개
// 입력박스에는 입출금 금액 넣음
//버튼 :  입금 버트, 출금 버튼
// 우측에 잔액 표시
// 아래에는 입금(녹색) , 출금(빨간색)

import {useState} from "react";


const AccountManager = () => {
  
  
  const [result, setResult] = useState<Number[]>([]);
  const input =() => {
    const insert = Number(prompt("얼마를 입금하시겠습니까?"));
      setResult([insert, ...result]);
      
  }
  const output =() => {
    const pull = Number(prompt("얼마를 출금하시겠습니까?"));
        setResult([-pull, ...result]);
  }
  return( 
    <div>
      <h1>AccountManager</h1>
  <button onClick ={()=>{
    input();
  }}>
    입금
    </button>
  <button onClick ={()=>{
    output();
  }}>
    출금
    </button>
    {/* <span>잔액 : {result.reduce((sum, current) => [sum + current, 0)}원</span> */}
    <ul>
        {
          result.map((num) =>(
            num > 0 ? (
            <li style={{ color: "green" }}>
                입금 : {num}원
            </li>
            ) : (
            <li style={{ color: "red" }}>
                출금 : {num}원
            </li>
            )
          )
          )
        }
    </ul>
  </div>
  )
}

export default AccountManager;