import React,{useState} from "react";

function Counter(){
  // hooks 함수 useState => 상태값
  // const [변수명, 변수값을 변환시키는 함수] = useState(0);
  const [number, setNumber] = useState(0);  
  const plus = () => {
    setNumber(number+1);
    console.log('1 더했습니다');
  }
  const minus = () => {
    setNumber(number-1);
    console.log('1 뺐습니다');
  }
  return(
    <div>
       <h2>{number}</h2>
       <button onClick={plus}>더하기</button>
       <button onClick={minus}>빼기</button>
    </div>
  )
}

export default Counter;