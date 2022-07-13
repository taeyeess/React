import React from "react";

function User({user,onRemove, onToggle}){ //{user}하나의 배열요소이면서 인덱스 됩니다.
    return(
        <div>
            <b style={{cursor:'pointer', color:user.active ? 'deeppink' : 'black'}} 
              onClick={()=>onToggle(user.id)}>{user.username}
            </b>
            <span>{user.email}</span>&nbsp;&nbsp;&nbsp;
            <button onClick={()=> onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map((user)=>(
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default UserList;