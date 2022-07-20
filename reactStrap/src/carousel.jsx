import React, {Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel.css';

const items = [
  {
    src:'https://img.hani.co.kr/imgdb/resize/2015/0718/00535983901_20150718.JPG',
    altTextL:'이미지의 대체글',
    caption:'슬라이드1 설명',
    header:'슬라이드1 제목'
  },
  {
    src:'https://masism.kr/wp-content/uploads/2018/05/ti2.jpg',
    altTextL:'이미지의 대체글',
    caption:'슬라이드2 설명',
    header:'슬라이드2 제목'
  },
  {
    src:'https://pip-thumb.zumst.com/api/v1/wigfn_VC002_76886310_content.jpeg?w=880&h=495',
    altTextL:'이미지의 대체글',
    caption:'슬라이드3 설명',
    header:'슬라이드3 제목'
  }
  // 배열의 갯수 = 슬라이드의 개수
];

class ReactCarousel extends Component {
  render(){
    return(
      <div>
        <UncontrolledCarousel items = {items}/>
      </div>
    )
  }
}

export default ReactCarousel;