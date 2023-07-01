/* eslint-disable */

import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { Nav } from 'react-bootstrap';

let SkyBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'black' ? 'white' : 'black'};
    padding : 10px;
`

// ??? 스타일 복사 검색
// let NewBtn = styled.button(SkyBtn)`
// `


function Detail(props) {

    let {id} = useParams();

    let [count, setCount] = useState(0);
    let [time, setTime] = useState(true);
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');

    useEffect(()=>{
        setFade2('end')
        return ()=>{
          setFade2('')
        }
      },[])


    useEffect(() => {
        let timer = setTimeout(() => {
            setTime(false);
        }
        , 2000)

        return () => {
            clearTimeout(timer);
        }
    })

    useEffect(() => {
        if(isNaN(num) == true) {
            alert('숫자를 입력하세요.');
        }
    }, [num])

    

    return (
        <div className={'container start ' + fade2}>
            {
                time == true 
                ? <div className="alert alert-warning">
                    2초이내 구매시 할인
                 </div>
                : null
            }

            <SkyBtn bg="skyblue" onClick={() => {setCount(count+1)}}>버튼</SkyBtn>
            <SkyBtn bg="black">버튼</SkyBtn>
            {/* <NewBtn bg="orange">버튼</NewBtn> */}

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes[id].id + 1) +".jpg"} width="100%" />
                </div>
                <input onChange={(e) => {setNum(e.target.value)}}></input>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>



            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link eventKey="link0" onClick={() => {setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link1" onClick={() => {setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link2" onClick={() => {setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent shoes={props.shoes} tab={tab}/>

        

            </div> 
    )
}

// function TabContent(props) {
//     if(props.tab == 0) {
//         return <div>내용0</div>
//     }
//     if(props.tab == 1) {
//         return <div>내용1</div>
//     }
//     if(props.tab == 2) {
//         return <div>내용2</div>
//     }
// }

//  props.tab을 짧게 쓰려면
// function TabContent({tab}) {
//     if(tab == 0) {
//         return <div>내용0</div>
//     }
//     if(tab == 1) {
//         return <div>내용1</div>
//     }
//     if(tab == 2) {
//         return <div>내용2</div>
//     }
// }


//  if문 안쓰고 코드 짜기 
function TabContent({tab, shoes}) {

    let [fade, setFade] = useState('');


    useEffect(() => {
        setTimeout(() => {setFade('end')},100)

        return () => {
            setFade('')
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            { [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
   
}



export default Detail;