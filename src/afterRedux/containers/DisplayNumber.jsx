import DisplayNumber from "../components/DisplayNumber";
import React, { Component } from "react";
import store from "../store";

/*
* DisplayNumber 컴포넌트를 감쌀 컨테이너인 래퍼 컴포넌트 생성
*/
export default class extends Component {
    // store.getState함수로 리덕스 store의 state를 가져와서 state에 있는 number 값에 전달
    state = {number:store.getState().number}

    constructor(props) {
      super(props);

     // displayNumber 컴포넌트가 store의 state 값 변경을 통보 받을 수 있도록 구독(subscribe)해야함
     // subscribe의 첫번째 인자: 리덕스 스토어의 값이 변경됐을 때 호출되는 함수로 리덕스 store의 state를 가져와 DisplayNumber의 stae에 주입
     store.subscribe(function() {
        this.setState({number:store.getState().number});     
     }.bind(this));
    }

    render() {
       return  <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }

    
}