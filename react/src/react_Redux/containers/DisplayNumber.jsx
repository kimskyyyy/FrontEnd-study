import DisplayNumber from "../components/DisplayNumber";
import { connect } from 'react-redux';


function mapReduxStateToReactProps(state) {
   // mapReduxStatToReactProp함수는 어떤 객체를 반환함
   // 이 객체는 DisplayNumber 컴포넌트의 props로 전달됨
   // 이 함수는 리덕스의 스토어 값이 변경될 때마다 호출되도록 되어있음 -> 리덕스 스토어의 값이 변경됐을 때 변경된 값을 받아 컴포넌트의 porps로 전달하면 되는 것
   // 변경된 스토어의 값은 이 함수의 인자로 전달됨, 따라서 인자로 전달된 state를 통해 변경된 number 값 사용 가능
   return {
      // 프로퍼티 이름은 컴포넌트에 전달하고자하는 props의 이름으로 지정하면됨
      // DisplyNumber에 props이름이 number였기 때문에 반환값 객체의 프로퍼티 이름을 number로 지정한 것
      number:state.number
   };
}

function mapReduxDispatchToReactProps() {
   return{};
}

// connect함수의 결과값인 함수의 반환값을 export
// connect 뒤에 괄호가 두 개이고 두 번째 괄호 안에 DisplayNumber를 인자로 호출
// connect 함수의 결과값이 아래 구현한 익명 컴포넌트를 대신함
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);




// /*
// * DisplayNumber 컴포넌트를 감쌀 컨테이너인 래퍼 컴포넌트 생성
// */
// export default class extends Component {
//     // store.getState함수로 리덕스 store의 state를 가져와서 state에 있는 number 값에 전달
//     state = {number:store.getState().number}

//     constructor(props) {
//       super(props);

//      // displayNumber 컴포넌트가 store의 state 값 변경을 통보 받을 수 있도록 구독(subscribe)해야함
//      // subscribe의 첫번째 인자: 리덕스 스토어의 값이 변경됐을 때 호출되는 함수로 리덕스 store의 state를 가져와 DisplayNumber의 stae에 주입
//      store.subscribe(function() {
//         this.setState({number:store.getState().number});     
//      }.bind(this));
//     }

//     render() {
//        return  <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
//     }

    
// }