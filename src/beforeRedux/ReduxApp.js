import React, {Component} from "react";
import "../ReduxApp.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";



class ReduxApp extends Component {
    state = {number:0}
    render() {
        return (
            <div className="ReduxApp">
               <h1>Root</h1>     
               
               {/* 상위 컴포넌트로부터 전달받은 props의 onClick 함수를 호출해서 size값 전달  */}
               <AddNumberRoot onClick={function(size) {
                this.setState({number:this.state.number + size});
               }.bind(this)}></AddNumberRoot>

               <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> 


            </div>
        );
    }
    
}

export default ReduxApp;