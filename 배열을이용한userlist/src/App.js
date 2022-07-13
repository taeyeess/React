import React, { useMemo, useRef, useState } from 'react';
import './App.css';

// import Counter from './component/counter';'
// import Input from './component/input';
// import MultiInput from './component/multiinput';
// import UserList from './component/userlist';
import UserList from './component/userlist2';
import CreateUser from './component/createuser';

function countActiveUser(users){
  console.log('선택된 사용자 수를 세는중....');
  return users.filter(user => user.active).length;
}


function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  //배열로 된 자료를 리스트 자원으로 활용
  const [users, setUsers] = useState([

    {
      id: 1,
      username: '진형욱',
      email: 'jinhyeonguk@gmail.com'
    },
    {
      id: 2,
      username: '박상용',
      email: 'parksangyong@gmail.com'
    },
    {
      id: 3,
      username: '이영준',
      email: 'leeyeongjun@gmail.com'
    },
    {
      id: 4,
      username: '우형택',
      email: 'woohyeongtaek@gmail.com'
    },
    {
      id: 5,
      username: '유가희',
      email: 'yugahea@gmail.com'
    },
  ])
  const nextId = useRef(6)

  //리스트 항목 추가
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers(users.concat(user)); //추가된 배열요소를 배열리스트에서 마지막에 추가한다.


    //추가할 배열을 입력한 input태그에 빈공백으로 설정한다.
    setInputs({
      username: '',
      email: ''
    })

    //다음에 추가될 배열요소의 인덱스값을 미리 1 증가함
    nextId.current += 1;  //7

  }

  //리스트 항목 삭제 함수.
  const onRemove = (id) => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듬.
    //user.id가 id인 것을 제거한다.
    //filter()란? : filter(조건)배열에서 해당 조건되는 요소 찾아주는 메소드
    setUsers(users.filter(user => user.id !== id))
  }

  //리스트 요소를 선택했을때 스타일이 바뀌는 함수
  const onToggle = (id) => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active } : user)
    )
  }

  const count = useMemo(() => countActiveUser(users), [users]); //연산된 재활용하는 함수
  // countActiveUser(users) 함수 호출하면 해당 배열을 파라미터 전달.
  // [users] 리턴되는값이 저장되는 배열

  return (
    <div>
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <MultiInput /> */}
      {/* <UserList /> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />

      <div>선택된 사용자 수 : {count}</div>
    </div>
  );
}


export default App;