import React, { useState } from 'react';
import './App.css';

//import Counter from './component/counter';'
//import Input from './component/input';
//import MultiInput from './component/multiInput';
//import UserList from './component/userlist';
import UserList from './component/userlist2';
import CreateUser from './component/createuser'

function App() {
  const [inputs, setInputs] = useState({
    usernmae:'',
    email:''
  })

  const {username, email} = inputs;

  const onChange = (e) =>{
    const{name,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  //배열로 된 자료를 리스트 자원으로 활용
  const [users,setUsers] = useState([
    {
        id:1,
        username:'김사과',
        email:'apple@apple.com'
    },
    {
        id:2,
        username:'오렌지',
        email:'orange@orange.com'
    },
    {
        id:3,
        username:'바나나',
        email:'banana@banana.com'
    },
    {
        id:4,
        username:'이메론',
        email:'melon@melon.com'
    },
    {
        id:5,
        username:'유딸기',
        email:'berry@berry.com'
    }
])

//리스트 항목 추가
const onCreate = () => {
  const user = {
    id:nextid.current,
    username,
    email
  }
}

setUsers(users.concat(user));//추가된 배열 요소를 배열리스트에서 마지막에 추가

//추가할 배열을 입력한 input태그에 빈공백으로 설정
setInputs({
  username:'',
  email:''
})

// 다음에 추가될 배열요소의 인덱스값을 미리 1 증가함
nextId.current += 1;

//리스트 항목 삭제 함수
const onRemove = (id) => {
  //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
  //user.id가 id인 것을 제거함
  //filter(): filter(조건)배열에서 해당되는 요소 찾아주는 메소드
  setUsers(users.filter(user =>user.id !==id))
}

//리스트 요소를 선택했을 때 스타일이 바뀌는 함수
const onToggle = (id) =>{
  setUsers(
    users.map(user => user.id === id ? {...user,active: !user.active }: user)
  )
}

  return (
    <div>
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <MultiInput/> */}
      {/* <UserList/> */}
      <CreateUser username={username} email={email} onChang={onchange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;