import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import MainCom from './mainCom';
import Brand from './components/brand';
import Shop from './components/shop';
import Promotion from './components/promotion';
import Community from './components/community';
import "./slick.css";
import "./slick-theme.css";

// https://tocobo.co.kr/

// yarn add react-router-dom@5

// npm install react-slick --save
// npm install slick-carousel

function App() {
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
      {/* <div className='main'>
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
        
      </div> */}

      {/* 본문내용 */}
      <div>
        <Route path ='/' exact={true}  component={MainCom} />
        <Route path ='/components/brand' component={Brand} />
        <Route path ='/components/shop' component={Shop} />
        <Route path ='/components/promotion' component={Promotion} />
        <Route path ='/components/community' component={Community} />
      </div>
    </div>
  );
}

export default App;
