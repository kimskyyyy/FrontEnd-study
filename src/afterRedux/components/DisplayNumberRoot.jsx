import React, {Component} from "react";
import DisplayNumber from "../containers/DisplayNumber";

// DisplayNumberRoot 부모 컴포넌트(자식은 DisplayNumber)
export default class DisplayNumberRoot extends Component{
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber number={this.props.number} unit="kg"></DisplayNumber>

                {/* // Redux 적용 전, props로 전달됐던 이벤트 함수와 값 삭제
                <DisplayNumber number={this.props.number}></DisplayNumber> */}
                
            </div>
        );
    }
}