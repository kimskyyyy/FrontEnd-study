import React, {Component} from "react";
import store from "../store";

// 눌렀을 때 화면에 표시되는 부분인 DisplayNumber 컴포넌트
export default class DisplayNumber extends Component {
    // store.getState함수로 리덕스 스토어의 state를 가져와 DisplayNumber의 state에 있는 number값에 전달
    state = {number:store.getState().number}
    constructor(props) {
        super(props);
        // 리덕스 스토어의 state값이 변경됐다는 사실을 통보받을 수 있게 구독
        // subscribe()의 첫번째 인자: 리덕스 스토어의 값이 변경됐을 때 호출되는 함수
        store.subscribe(function() {
            this.setState({number:store.getState().number});
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.state.number} readOnly></input> {this.props.unit}
            </div>
        ); 
    }
}
