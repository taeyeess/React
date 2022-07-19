import React from "react";
import Footer from "./footer";
import styles from './coupon.module.css';
import styled from 'styled-components';


const Mainimg = styled.div`
  width: 100%; 
  height: 250px;
  background-color:skyblue;
`;

const Contents = styled.div`
  width: 100%;
  height: 2000px;
  background-color:#ccc;
`;

const ContentsIn = styled.div`
  margin: 0 auto;
  width: 1500px;
  height: 2000px;heroku --version
  background-color:#666;
`;

const Box = styled.div`
  float: left; 
  margin: 20px;
  width: 600px;
  height: 200px;
  background-color:#fff;
  // cursor:pointer;
  // transition: all 0.5s;
  // &:hover{
  //   background-color:#ccc;
  //   height:100px;
  }
`;

function Coupons({user}){
  return(
    <div className={styles.box}>
      <div className={styles.box_l}>
        <span>{user.ttl}</span>
        <h3>{user.price}</h3>
        <p>{user.des}</p>
      </div>
      <div className={styles.box_r}>
        <button>button</button>
      </div>
    </div>
  )
}



function Coupon(){
  const BoxIn = [{
    id:1,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  },
  {
    id:2,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  },
  {
    id:3,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  },
  {
    id:4,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  },
  {
    id:5,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  },
  {
    id:6,
    ttl:'할인쿠폰',
    price:'20,000원',
    des:'20,000원이상 결제시'
  }
]
    return(
        <div>
          <Mainimg/>
          <Contents>
            <ContentsIn>              
              <Box user={BoxIn[0]}></Box> 
              <Box user={BoxIn[1]}></Box> 
              <Box user={BoxIn[2]}></Box> 
              <Box user={BoxIn[3]}></Box> 
              <Box user={BoxIn[4]}></Box> 
              <Box user={BoxIn[5]}></Box> 
            </ContentsIn>
          </Contents>          
          <Footer/>
        </div>
    )
}

export default Coupon;