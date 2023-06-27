//  warning 메시지 비활성화
/* eslint-diable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  let posts = '강남 우동 맛집';
  // 스테이트 사용법
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉] = useState(0);
 
  function 함수() {
    console.log(1)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        {/* onClick에 함수명으로 함수 넣기 */}
        <h4>{글제목[0]} <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        {/* onClick에 함수 만드는 문법 직접 넣기 */}
        <h4>{글제목[1]} <span onClick={function(){console.log(1)}}>👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        {/* onClick에 화살표 함수 넣기 */}
        <h4>{글제목[2]}<span onClick={ () => {console.log(1)} }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App;
