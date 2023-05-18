import {createStore} from "redux";

/* 
* createStore의 첫 번째 인자 값: reducer 함수
* reducer 함수의 첫 번째 인자 state: 데이터
* reducer 함수의 두 번째 인자 action: 데이터에 가해지는 여러가지 행위
* reducer 함수는 기본적으로 state 값을 반환
*
* crateStore의 두 번째 인자 값: enhancer, 미들웨어, 타임트래블링, 지속성 등과 같은 타사 기능으로 스토어를 향상시기키 위해 선택적 지정
*/

export default createStore(function(state, action) {
    // state가 undefined 일 때 number: 0으로 초기화
    if(state === undefined) {
        return {number:0};
    }
    
    // action.type의 값이 INCREMENT 일 때 기존 state.size값에 인자로 전달된 action.size값을 추가해서 반환
    // ...state: 기존 state의 모든 값을 새로 만들어지는 객체에 그대로 추가하되 number의 값만 변경할 때 사용하는 문법 
    // -> 이 구문을 구조 분해 할당(Destructuring assignment) 라고 함 
    if(action.type === 'INCREMENT') {
        console.log(state.number)
        return {...state, number:state.number + action.size}
    }
    
    return state;
}, 
// crateStore의 두 번째 인자 값: 크롬 확장 프로그램인 Redux DevTool을 사용하기 위해 지정
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())