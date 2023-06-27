import React, {Component} from "react";

// 눌렀을 때 화면에 표시되는 부분인 DisplayNumber 컴포넌트
// DisplayNumberRoot로 받은 props 값 출력
export default class DisplayNumber extends Component {

    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type="text" value={this.props.number} readOnly></input>
            </div>
        ); 
    }
}
