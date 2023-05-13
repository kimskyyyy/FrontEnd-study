import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input1 from "./pages/Input1";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        {/* HTML의 <a href="/">Home</a>  과 같은 의미 */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | { " "}
      <Link to="/counter">Counter</Link> | <Link to="/input1">Input1</Link> | { " "}
      <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | { " "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input1" element={<Input1 />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/list" element={<List />}/>

      </Routes>
      
    </div>
  );
}

export default App;
