import React, { Component } from "react";
import Slider from "react-slick";
import styles from './mainCom.module.css';

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
      <div className={styles.main_slide}>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
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
    );
  }
}

class FirstPage extends Component{  // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div className={styles.main_1}>
        <h1>소개</h1>
        <blockquote>
          <img alt= "profile" src={process.env.PUBLIC_URL+"/img/profile.jpg"} align="left" hspace="20"/>
        <br></br><h3>"졸업 작품에서 백엔드 개발을 경험 해 본 후 백엔드 개발로 진로를 정해 <br></br> 현재는 풀스택 개발자를 목표로 하고 있습니다."</h3>
        <br></br></blockquote>
        <h3 align="left">나이 : 98년생</h3>
        <h3 align="left">MBTI : ISTP</h3>
        <h3 align="left">취미 : Unity 공부</h3>
      </div>
    );

  }
};

class SecondPage extends Component{  // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div>
        <h1>소개</h1>
        <blockquote>
          <img alt= "profile" src={process.env.PUBLIC_URL+"/img/profile.jpg"} align="left" hspace="20"/>
        <br></br><h3>"졸업 작품에서 백엔드 개발을 경험 해 본 후 백엔드 개발로 진로를 정해 <br></br> 현재는 풀스택 개발자를 목표로 하고 있습니다."</h3>
        <br></br></blockquote>
        <h3 align="left">나이 : 98년생</h3>
        <h3 align="left">MBTI : ISTP</h3>
        <h3 align="left">취미 : Unity 공부</h3>
      </div>
    );

  }
};

class ThirdPage extends Component{  // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div>
        <h1>소개</h1>
        <blockquote>
          <img alt= "profile" src={process.env.PUBLIC_URL+"/img/profile.jpg"} align="left" hspace="20"/>
        <br></br><h3>"졸업 작품에서 백엔드 개발을 경험 해 본 후 백엔드 개발로 진로를 정해 <br></br> 현재는 풀스택 개발자를 목표로 하고 있습니다."</h3>
        <br></br></blockquote>
        <h3 align="left">나이 : 98년생</h3>
        <h3 align="left">MBTI : ISTP</h3>
        <h3 align="left">취미 : Unity 공부</h3>
      </div>
    );

  }
};

class FourthPage extends Component{  // 클래스 이름 첫문자 무조건 대문자!

  render() {
    return(
      <div>
        <h1>소개</h1>
        <blockquote>
          <img alt= "profile" src={process.env.PUBLIC_URL+"/img/profile.jpg"} align="left" hspace="20"/>
        <br></br><h3>"졸업 작품에서 백엔드 개발을 경험 해 본 후 백엔드 개발로 진로를 정해 <br></br> 현재는 풀스택 개발자를 목표로 하고 있습니다."</h3>
        <br></br></blockquote>
        <h3 align="left">나이 : 98년생</h3>
        <h3 align="left">MBTI : ISTP</h3>
        <h3 align="left">취미 : Unity 공부</h3>
      </div>
    );

  }
}
