import React, { useReducer } from "react";
import styles from './shop.module.css';
//yarn add react-icons
import { FiHeart } from "react-icons/fi";

function Item({user}){
  return(
    <div>
      <div className={styles.item}>      
        <img className={styles.img} src={user.src}/>
        <h5>{user.sub_ttl}</h5>
        <p>{user.ttl}</p>
        <p>{user.ttl_2}</p>
        <span>{user.discount}</span>
        <p>{user.price}</p>
        <button>{user.btn}{ FiHeart }</button>
      </div>      
    </div>
  )
}


function Cleansing(){

  const items = [
    {
      id:1,
      src:'https://www.tocobo.co.kr/web/product/medium/202207/fa9cc5ac4a5467596417e195d01104dd.png',
      sub_ttl:'저자극 데일리 토너 세트',
      ttl:'Toner Duo Set',
      ttl_2:'토너 듀오+바캉스 키트',
      discount:'10%',
      price:'40,500won',
      btn:'ADD TO CART'
    },
    {
      id:2,
      src:'https://www.tocobo.co.kr/web/product/medium/202204/becb385a42cdc6da57e5b0420e447a52.png',
      sub_ttl:'저자극 비건 선 케어 세트',
      ttl:'Sun Duo Set',
      ttl_2:'선 듀오+바캉스 키트',
      discount:'10%',
      price:'39,000won',
      btn:'ADD TO CART'
    },
    {
      id:3,
      src:'https://www.tocobo.co.kr/web/product/medium/202206/fa3715971e592cec1fc701ec4face2c8.png',
      sub_ttl:'비타민 모공 수축 토너',
      ttl:'Vita Berry Pore Toner',
      ttl_2:'비타 베리 포어 토너 기획세트',
      discount:'',
      price:'20,000won',
      btn:'ADD TO CART'
    }  
  ]
  
  return(
    <div>
      <div className={styles.items}>
        <Item user={items[0]}/>      
        <Item user={items[1]}/>      
        <Item user={items[2]}/>      
      </div>
    </div>
  )
}
export default Cleansing;