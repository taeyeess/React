import React, { useReducer } from "react";
import styles from './shop.module.css';
//yarn add react-icons
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function Item({user}){
  return(    
      <div className={styles.item}>      
        <img className={styles.img} src={user.src}/>
        <h5>{user.sub_ttl}</h5>
        <p>{user.ttl}</p>
        <p>{user.ttl_2}</p>
        <p className={styles.price}>
          <span className={styles.discount}>{user.discount}</span>
          <span>{user.price}</span>
        </p>
        <button>{user.btn} 
          <p className={styles.fiheart}><FiHeart/></p>
          <p className={styles.faheart}><FaHeart/></p> 
        </button>
      </div>    
  )
}


function ShopItemAll(){

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
    },
    {
      id:4,
      src:'https://www.tocobo.co.kr/web/product/medium/202207/5c2108578724d79e22af0ba4a457eb6c.png',
      sub_ttl:'저자극 비건 선스틱',
      ttl:'Cotton Soft Sun Stick',
      ttl_2:'코튼 소프트 선 스틱',
      discount:'10%',
      price:'19,800won',
      btn:'ADD TO CART'
    },
    {
      id:5,
      src:'https://www.tocobo.co.kr/web/product/medium/202205/162ba52139e07b2662ee29cce399a27f.png',
      sub_ttl:'저자극 비건 선크림',
      ttl:'Bio Watery Sun Cream',
      ttl_2:'바이오 워터리 선 크림',
      discount:'10%',
      price:'21,600won',
      btn:'ADD TO CART'
    },
    {
      id:6,
      src:'https://www.tocobo.co.kr/web/product/medium/202202/7d539059bc97005195c2707f9326c6cb.png',
      sub_ttl:'저자극 미세 버블 클렌징 폼 세트',
      ttl:'Cleansing Foam Duo Set',
      ttl_2:'클렌징 폼 듀오+바캉스 키트',
      discount:'10%',
      price:'21,600won',
      btn:'ADD TO CART'
    },
    {
      id:7,
      src:'https://www.tocobo.co.kr/web/product/medium/202202/109447db9a255de020ce7bdd70ae0568.png',
      sub_ttl:'저자극 미세 버블 클렌징 폼',
      ttl:'Coconut Clay Cleaning Foam',
      ttl_2:'코코넛 클레이 클렌징 폼',
      discount:'',
      price:'12,000won',
      btn:'ADD TO CART'
    },
    {
      id:8,
      src:'https://www.tocobo.co.kr/web/product/medium/202203/8359a8a0c92507f7fba8073c4faf9d6c.png',
      sub_ttl:'신규회원 샘플 이벤트',
      ttl:'TOCOBO Starter Kit',
      ttl_2:'스킨케어 스타터 키트',
      discount:'',
      price:'0won',
      btn:'ADD TO CART'
    },
    {
      id:9,
      src:'https://www.tocobo.co.kr/web/product/medium/202111/74ae9b6ed45eca99e1a69fe6f3ff7789.png',
      sub_ttl:'각질 정돈 및 고보습 기초세트',
      ttl:'Toner Duo Set',
      ttl_2:'토너 듀오+바캉스 키트',
      discount:'10%',
      price:'40,500won',
      btn:'ADD TO CART'
    },
    {
      id:10,
      src:'https://www.tocobo.co.kr/web/product/medium/202201/9a4e3df144a5850149de396447181c50.png',
      sub_ttl:'저자극 데일리 토너 세트',
      ttl:'Toner Duo Set',
      ttl_2:'토너 듀오+바캉스 키트',
      discount:'10%',
      price:'40,500won',
      btn:'ADD TO CART'
    },
    {
      id:11,
      src:'https://www.tocobo.co.kr/web/product/medium/202207/743706bcbf5a5605743534cb38bf3d3f.png',
      sub_ttl:'저자극 데일리 토너 세트',
      ttl:'Toner Duo Set',
      ttl_2:'토너 듀오+바캉스 키트',
      discount:'10%',
      price:'40,500won',
      btn:'ADD TO CART'
    },
    {
      id:12,
      src:'https://www.tocobo.co.kr/web/product/medium/202203/fd4550a1024ef7336463f278374399be.png',
      sub_ttl:'저자극 데일리 토너 세트',
      ttl:'Toner Duo Set',
      ttl_2:'토너 듀오+바캉스 키트',
      discount:'10%',
      price:'40,500won',
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
      <div className={styles.items}>
        <Item user={items[3]}/>      
        <Item user={items[4]}/>      
        <Item user={items[5]}/>       
      </div>
      <div className={styles.items}>
        <Item user={items[6]}/>      
        <Item user={items[7]}/>      
        <Item user={items[8]}/>       
      </div>
      <div className={styles.items}>
        <Item user={items[9]}/>      
        <Item user={items[10]}/>      
        <Item user={items[11]}/>       
      </div>
    </div>    
  )
}
export default ShopItemAll;