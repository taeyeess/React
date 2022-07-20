import React, {Component} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropDown extends Component {
  // class방식 초기값 설정
  constructor(props){
    super(props);
    this.state = {dropDownOpen:'false'}
  }
  
  toggle = (e) =>{
    this.setState({dropDownOpen:!this.state.dropDownOpen})
  }
  
  render(){
    return(
      <div>
       <ButtonDropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
        <DropdownToggle>
          버튼Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>헤더</DropdownItem>
          <DropdownItem>메인</DropdownItem>
          <DropdownItem>내용</DropdownItem>
          <a href=''>
            <DropdownItem>페이지이동</DropdownItem>
          </a>
          <DropdownItem onClick={e=>alert("Alert 버튼")}>경고창</DropdownItem>
        </DropdownMenu>
       </ButtonDropdown>
      </div>
    )
  }
}

export default DropDown;