import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';

// mapDispatchToProps() 첫 번째 인자: 리덕스의 dispatch 함수, react-redux가 mapDispatchToProps함수를 호출할 때 인자로 dispatch 함수 전달
// -> mapDispatchToPorps함수 내에서 dispatch 함수를 호출해 리덕스 스토어에 dispatch 작업을 할 수 있음
// ----

function mapDispatchToProps(dispatch) {
    // mapDispatchToProps 함수의 반환값은 객체로 컴포넌트의 props로 전달됨
    // addNumber컴포넌트의 props이름이 onClick이므로 이 객체에 onClick이라는 프로퍼티를 준 것
    return {
        onClick:function(size) {
            dispatch({type:'INCREMENT', size:size});
        }
    }
}

// connect() 첫 번째 인자: AddNumber 컴포넌트는 전달되는 이벤트 props만 존재하고 상태를 전달하는 props가 없어서 null
// connect() 두 번째 인자: mapDispatchToProps
export default connect(null, mapDispatchToProps)(AddNumber);

// //AddNumber 컴포넌트를 감쌀 컨테이너인 래퍼 컨포넌트 생성(익명 컴포넌트)
// export default class extends Component {
//     render() {
//         // onClick props로 전달된 함수 내에서 리덕스 스토어에 dispatch
//         return <AddNumber onClick={function(size) {
//             // Redux 적용
//             // dispatch메서드: 메서드를 통해 값과 type 전달
//             store.dispatch({type:'INCREMENT', size:size});
//         }.bind(this)}></AddNumber>
//     }
// }