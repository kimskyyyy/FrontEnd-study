import React, {Component} from "react";

// 값을 입력하고 버튼을 누르는 부분인 AddNumber 컴포넌트
// AddNumber컴포넌트의 +버튼을 누르면 입력된 값이 다시 DisplayNumber로 가도록 구현
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

            {/* 값이 변경 될 때 state의 size값이 변경될 수 있도록 onChange구현 */}
            <input type="text" value={this.state.size} onChange={function(e) {
                this.setState({size:Number(e.target.value)});
            }.bind(this)}>
            </input>
        </div>
        );
    }
}