import React from 'react';
import styles from './contents.module.css';
//내부에서 컴포넌트 선언하는 모듈 연결
import styled from 'styled-components';

const Block = styled.div`
  width:100%;
  height:200px;
  background-color:red;
  `

const Btn2 = styled.button`
  width:200px;
  height:200px;
  background-color:blue;
  cursor:pointer;
  &:hover{
    background-color:red;
  }
  `

function Contents() {
  return (
    <div>
     <div className={styles.header}></div> 
      <Block/>
      <Btn2/>
    </div>
  )
}

export default Contents;