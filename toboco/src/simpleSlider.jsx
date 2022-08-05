import React, { Component } from "react";
import Slider from "react-slick";
import styles from './mainCom.module.css';
import {Link} from 'react-router-dom';
// import './App.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // prev:true,
      // next:true,      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>        
        {/* 메인상단부분 */}
        <div className='header'>
            <>
              <ul className='nav'>
                <li><Link to='/components/brand'>Brand</Link></li>
                <li><Link to='/components/shop'>Shop</Link></li>
                <li><Link to='/components/promotion'>Promotion</Link></li>
                <li><Link to='/components/community'>Coummunity</Link></li>
              </ul>
            </>
            <h1 className='logo'><Link to='/'>TOBOCO</Link></h1>
            <>
              <ul className='icon'>
                  <li><img src='https://tocobo.cafe24.com/wib/img/icon/icon_language.svg'></img></li>
                  <li><img src='https://tocobo.cafe24.com/wib/img/icon/icon_search.svg'></img></li>
                  <li><img src='https://tocobo.cafe24.com/wib/img/icon/icon_search.svg'></img></li>
                  <li><img src='https://tocobo.cafe24.com/wib/img/icon/icon_cart.svg'></img></li>
              </ul>
            </>          
        </div>
        <div>
          <Slider {...settings}>
            <div className={styles.main_1}>
              <FirstPage/>
            </div>
            <div className={styles.main_2}>
              <SecondPage/>
            </div>
            <div className={styles.main_3}>
              <ThirdPage/>
            </div>
            <div className={styles.main_4}>
              <FourthPage/>
            </div>
            {/* <div className={styles.main_5}>
            <Firstpage/>
            </div>
            <div className={styles.main_6}>
            <Firstpage/>
            </div> */}
          </Slider>
        </div>
      </div>
    );
  }
}

class FirstPage extends Component{  // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div className={styles.first}>
        <div className={styles.main_txt}>
          <h1>
            Hello! Summer
            <br/>
            Vacance Special Set
          </h1>
          <p>자외선으로부터 피부를 보호하다! 토코보 여름 바캉스 기획세트</p>
          <Link to='/components/shop' className={styles.btn_link}>Discover More</Link>
        </div>
      </div>
    );

  }
};

class SecondPage extends Component{ // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div className={styles.second}>
        <div className={styles.main_txt}>
          <h1>
            Hello! Summer
            <br/>
            Vacance Special Set
          </h1>
          <p>자외선으로부터 피부를 보호하다! 토코보 여름 바캉스 기획세트</p>
          <Link to='/components/shop' className={styles.btn_link}>Discover More</Link>
        </div>
      </div>
    );

  }
};

class ThirdPage extends Component{ // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div className={styles.third}>
        <div className={styles.main_txt}>
          <h1>
            Hello! Summer
            <br/>
            Vacance Special Set
          </h1>
          <p>자외선으로부터 피부를 보호하다! 토코보 여름 바캉스 기획세트</p>
          <Link to='/components/shop' className={styles.btn_link}>Discover More</Link>
        </div>
      </div>
    );

  }
};

class FourthPage extends Component{ // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div className={styles.fourth}>
        <div className={styles.main_txt}>
          <h1>
            Hello! Summer
            <br/>
            Vacance Special Set
          </h1>
          <p>자외선으로부터 피부를 보호하다! 토코보 여름 바캉스 기획세트</p>
          <Link to='/components/shop' className={styles.btn_link}>Discover More</Link>
        </div>
      </div>
    );

  }
}
