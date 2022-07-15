import logo from 'react';
import { Route,Link } from 'react-router-dom';
import './App.css';

//yarn add react-router-dom@5
import Home from './home';
import About from './about';
import Profiles from './profiles';
import HistorySample from './historySample';
//yarn add react-router-dom@5

//라우터 관련 함수
// 특정주소에 컴포넌트 연결하는 방법 : <Route path="주소" component={보여줄 컴포넌트}</Route>
// 다른 주소로 이동시키기 : <Link to="주소">문자</Link>


function App() {
  return (
    <div>
      {/* 다른 주소로 이동시키기 */}      
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필목록</Link></li>
        <li><Link to="/historySample">히스토리</Link></li>
      </ul>
      {/* 특정주소에 컴포넌트 연결하는 방법 */}
      <div>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/historySample" component={HistorySample}></Route>
      </div>
    </div>
  );
}

export default App;
