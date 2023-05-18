import AddNumber from "../components/AddNumber";
import React, {Component} from "react";
import store from "../store";


/*
* AddNumber 컴포넌트를 감쌀 컨테이너인 래퍼 컨포넌트 생성(익명 컴포넌트)
*/
export default class extends Component {
    render() {
        // onClick props로 전달된 함수 내에서 리덕스 스토어에 dispatch
        return <AddNumber onClick={function(size) {
            // Redux 적용
            // dispatch메서드: 메서드를 통해 값과 type 전달
            store.dispatch({type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}