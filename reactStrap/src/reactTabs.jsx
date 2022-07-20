import React, {Component} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class ReactTabs extends Component {
  // class방식 초기값 설정
  constructor(props){
    super(props);
    this.state = {TabState:'first'}
  }
  
  toggle = (tabnum) =>{
    if(this.state.TabState !== tabnum) this.setState({TabState:tabnum})
  }
  
  render(){
    return(
      <div>
        {/* 탭메뉴 */}
        <Nav tabs>
          <NavItem>
            <NavLink onClick={()=>{this.toggle('first')}}>First TAB</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>{this.toggle('last')}}>Last TAB</NavLink>
          </NavItem>
        </Nav>
        {/* 탭 버튼에 의해 보여지는 부분 */}
        <TabContent activeTab={this.state.TabState}>
          <TabPane tabId='first'><h1>First TAB</h1></TabPane>
          <TabPane tabId='last'><h1>Last TAB</h1></TabPane>
        </TabContent>
      </div>
    )
  }
}

export default ReactTabs;