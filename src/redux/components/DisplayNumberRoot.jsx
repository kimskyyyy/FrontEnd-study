import React, {Component} from "react";
import DisplayNumber from "./DisplayNumber";

// DisplayNumberRoot 부모 컴포넌트(자식은 DisplayNumber)
export default class DisplayNumberRoot extends Component{
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber number={this.props.number}></DisplayNumber>
            </div>
        );
    }
}