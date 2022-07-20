import React from 'react';
import './App.css';
import ReactCarousel from './carousel';
import ReactTabs from './reactTabs';
import DropDown from './dropDown';

// yarn add bootstrap
// yarn add reactstrap
// index.js에 import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
   <div>
    <ReactCarousel/>
    <ReactTabs/>
    <DropDown/>
   </div>
  );
}

export default App;
