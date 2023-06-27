import React, { Component } from "react";
import AddNumber from "../containers/AddNumber";

// AddNumber의 부모 컴포넌트(자식은 AddNumber)
export default class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber></AddNumber>

                {/* // Redux 적용 전, props로 전달됐던 이벤트 함수와 값 삭제
                <AddNumber onClick={function(size){
                    this.props.onClick(size);
                }.bind(this)}></AddNumber> */}
               
            </div>
        );
    }
}