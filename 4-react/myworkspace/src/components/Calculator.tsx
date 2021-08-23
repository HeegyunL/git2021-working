// Calculator 컴포넌트

//1. prompt로 입력값을 두번 받음
// a = prompt , b=prompt

// 2.연산자를 prompt로 받음
// + , -, * , /

// 3.입력값 두개에 대한 연산 결과를 화면 출력
// state를 사용해야함

// 예) 입력값 1  : 10
//     입력값 2  : 5
//     연산자 : *
//      결과값 : 50
//    <div>50</div>

import {useState} from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const Inputc=()=>{
    const a = prompt("첫번째 값을 입력하시오(숫자만)")
    const b = prompt("두번째 값을 입력하시오(숫자만)")
    const c = prompt(" + , - , * , / 중 하나를 입력하시오")

    // eval(문자열)
    // 문자열이 자바스크립트코드로 실행 할 수 있으면 실행
    setResult(eval(`${a}${c}${b}`))

    // state 값에 변동이 없으면 컴포넌트를 업데이트 하지 않음 
  };

  return (
    <div>      
    <button onClick ={()=>{
      Inputc();
    }}>Calculator</button>
    <span>{result}</span>
    </div>
  )

}

export default Calculator;