import React from 'react';
import './App.css';
import Com01 from './component/com01';
import Com01_1 from './component/com01_1';
import Com02 from './component/com02';

function App() {
  const box = {
    width: "100%",
    height: "300px",
    backgroundColor:'lightyellow'
  }
  const ttl = '리액트시작10000'
  return (    
      <div className="wrapper">
        <h1 style={{color:'red'}}></h1>
        <div style={box}>{ttl}</div>
        <Com01 text = {ttl}/>
        <Com01_1 text = {ttl} color="red" />
        <Com02/>
      </div>
  );
}

export default App;
