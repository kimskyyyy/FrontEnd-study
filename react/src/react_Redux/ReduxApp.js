import React, {Component} from "react";
import "../ReduxApp.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";




class ReduxApp extends Component {
    // state = {number:0}
    render() {
        return (
            <div className="ReduxApp">
               <h1>Root</h1>     

                {/* // Redux 적용 전, props로 전달됐던 이벤트 함수와 값 삭제
               <AddNumberRoot onClick={function(size) {
                this.setState({number:this.state.number + size});
               }.bind(this)}></AddNumberRoot>

               <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> */}


               <AddNumberRoot></AddNumberRoot>
               <DisplayNumberRoot></DisplayNumberRoot>


            </div>
        );
    }
    
}

export default ReduxApp;