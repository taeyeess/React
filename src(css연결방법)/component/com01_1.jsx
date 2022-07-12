import React from "react";
import './com01.css';

// 함수형 컴포넌트 선언
// function Com01_1({text,color}){
function Com01_1(props){
  return(
    <div className="com01" style={{color:props.color}}>
      Com01{props.text}
    </div>
  )
}

export default Com01_1;