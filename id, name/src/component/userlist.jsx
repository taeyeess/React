import React from "react";

function User({user}){ //{user}하나의 배열요소이면서 인덱스가 됩니다
  return(
    <div>
      <b>{user.username}</b><span>{user.email}</span>
    </div>
  )
}

function UserList(){
  //배열로 된 자료를 리스트 자원으로 활용
  const users = [
    {
      id:1,
      username:'김사과',
      email:'apple@apple.com'      
    },
    {
      id:2,
      username:'오렌지',
      email:'orang@orang.com'
    },
    {
      id:3,
      username:'반하나',
      email:'banana@banana.com'
    },
    {
      id:4,
      username:'이메론',
      email:'melon@melon.com'
    },
    {
      id:5,
      username:'배애리',
      email:'berry@berry.com'
    }
  ];

  return(
    <div>
      {/* 
        user={users[0]}에서 user은 컴포넌트를 호출하면서 속성을 전달         
      */}
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/>
      <User user={users[3]}/>
      <User user={users[4]}/> */}
      
      {/*
        - map()활용 
        일반적인 함수 선언 : () => {내용} 내용을 시스템 처리
        map()을 사용할 경우 : () => (내용) 내용을 화면에 출력  
      */}
      {users.map((user,index)=>(
        <User user={user} key={index}/>
      ))}
    </div>
  )
}
export default UserList;