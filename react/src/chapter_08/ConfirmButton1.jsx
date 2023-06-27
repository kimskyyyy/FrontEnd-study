import React from "react";

// 클래스 컴포넌트로 작성
class ConfirmButton1 extends React.Component {
    constructor(props) {
        super(props);

        // 확인(Confirm)여부를 저장하기 위해 state에 isConfirmed라는 변수를 하나 갖고 있고, 초기값은 false
        this.state = {
            // isConfirmed 라는 Boolean 변수
            isConfirmed: false,
        };

         // callback에서 this를 사용하기 위해서 바인딩 필수
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            // 버튼을 클릭하면 handleConfirm() 호출
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton1;