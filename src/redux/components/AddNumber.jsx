import React, {Component} from "react";

// 값을 입력하고 버튼을 누르는 부분인 AddNumber 컴포넌트
export default class AddNumber extends Component {
    // size라는 속성값(초기값 1)
    state = {size:1}
    render() {
        return (
            <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={function() {
                this.props.onClick(this.state.size);
                }.bind(this)}>
            </input>

            <input type="text" value={this.state.size} onChange={function(e) {
                this.setState({size:Number(e.target.value)});
            }.bind(this)}>
            </input>
        </div>
        );
    }
}