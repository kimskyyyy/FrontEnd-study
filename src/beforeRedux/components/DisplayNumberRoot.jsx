import React, {Component} from "react";
import DisplayNumber from "./DisplayNumber";

// DisplayNumberRoot 부모 컴포넌트(자식은 DisplayNumber)
export default class DisplayNumberRoot extends Component{
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                {/* DisplayNumberRoot 컴포넌트에서 props값을 받아 DisplayNumber 컴포넌트로 전달 */}
                <DisplayNumber number={this.props.number}></DisplayNumber>
            </div>
        );
    }
}