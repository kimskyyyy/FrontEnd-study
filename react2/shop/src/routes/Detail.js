/* eslint-disable */

import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";

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
        <div className="container">
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
            </div> 
    )
}

export default Detail;