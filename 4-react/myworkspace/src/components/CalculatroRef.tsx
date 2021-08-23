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

import {useRef, useState} from "react";

const CalculatorRef = () => {
  const [result, setResult] = useState<String | undefined>("");

  const a = useRef<HTMLInputElement>(null);
  const b = useRef<HTMLInputElement>(null);
  const cal = useRef<HTMLInputElement>(null);

  const calculator = () =>{
    setResult(eval(`${a.current?.value}${cal.current?.value}${b.current?.value}`))
  }

  return (
    <div>      
    <input placeholder="첫번째값" type ="text" ref={a}></input>
    <input placeholder="두번째값" type ="text" ref={b} ></input>
    <input placeholder="(+,-,*,/)을 입력하시오" type ="text" ref={cal} ></input>
    <button onClick ={()=>{
      calculator();
    }}>Calculator</button>
    <div>[{result}]</div>
    </div>
  )

}

export default CalculatorRef;