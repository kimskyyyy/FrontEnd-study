/* eslint-disable*/
//  warning 메시지 비활성화


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
 
  let posts = '강남 우동 맛집';
  // 스테이트 사용법
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
 
  function 함수() {
    따봉변경(따봉+1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      글제목 '남자 코트 추천'을 '여자 코트 추천'으로 변경하기
      <br></br>
      
      방법1 
      <button onClick={ () => {글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬 독학'])} }>추천🫶🏻</button>
      
      방법2
      {/* 제대로 반영되지 않음, 이유는 3번 참조 */}
      <button onClick={ () => {
        글제목[0] = '여자 코트 추천';
        글제목변경(글제목);
      }}>추천🫶🏻</button>

      방법3
      {/* array, object는 원본을 보존하는 것이 좋기 떄문에 이렇게 코드 작성 */}
      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>추천🫶🏻</button>

      
      <button onClick={() => {
        let copy = [...글제목.sort()];
        console.log(글제목);
        글제목변경(copy);
      }}>가나다순 정렬</button>

  

      {/* function(a, i)
      파라미터1 a: array의 자료
      파라미터2 i: 반복문 돌 때 마다 0부터 1씩 증가하는 정수 */}

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
            {/* onClick에 화살표 함수 넣기 */}
              <h4 onClick={() => {setModal(true); setTitle(i)}}>{글제목[i]}
                <span onClick={ (e) => {
                  e.stopPropagation();

                  let copy = [...따봉];
                  copy[i] = copy[i]+1;
                  따봉변경(copy)
                  } }>👍</span> {따봉[i]} 
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
          </div>
          )
        })
      }

      
    <br></br>
    <input onChange={(e) => {
      입력값변경(e.target.value)
    }} />

    <button onClick={() => {
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy);
    }}>글발행</button>
     



      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
      }
{/* 
      {
        modal == true ? 
        글제목.map(function(a, i) {
          return (
             <Modal 글제목={글제목[i]} 글제목변경={글제목변경[i]}/>
          )
        })
        : null
      } */}

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy);
      }}>글수정</button>
  </div>
  )
}

export default App;
