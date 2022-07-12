import React,{useState, useRef} from "react";

function MultiInput(){
  const [inputs, setInputs] = useState({
    userid:'',
    name:''
  });
  const useridInput = useRef(); //특정 dom 선택
  const {userid, name} = inputs; //비구조화 할당을 통해 값을 전달

  const onChange = (e) =>{
    const {value, name} = e.target; //e.target에서 name과 value 가져옴
    setInputs({
      ...inputs, //객체를 복사, spread 문법
      [name]:value 
      //name키를 가진 값을 value로 설정
      //name의 속성별로 value값을 설정해서
      //아래 보여주는 부분에 각각 설정함
    })
  
  }
  const onReset = ()=>{
    setInputs({
      userid:'',
      name:''
    });
  }
  
  return(
    <div>
      <input name='userid' onChange={onChange} placeholder='아이디' value={userid} ref={useridInput}/>
      <input name='name' onChange={onChange} placeholder='이름' value={name}/>
      <button onClick={onReset}>지우기</button>
      <div>
        <b>아이디: {userid}</b>,
        <b>이름: {name}</b>
      </div>
    </div>
  )
}

export default MultiInput;