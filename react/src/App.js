import React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

// Page
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Counter from "./pages/Counter";
// import Input1 from "./pages/Input1";
// import Input2 from "./pages/Input2";
// import List from "./pages/List";

// Mini_blog
import MainPage from "./mini_blog/page/MainPage";
import PostWritePage from "./mini_blog/page/PostWritePage";
import PostViewPage from "./mini_blog/page/PostViewPage";

import styled from "styled-components";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// page
// function App() {
//   return (
//     <div className="App">
//       <nav>
//         {/* HTML의 <a href="/">Home</a>  과 같은 의미 */}
//       <Link to="/">Home</Link> | <Link to="/about">About</Link> | { " "}
//       <Link to="/counter">Counter</Link> | <Link to="/input1">Input1</Link> | { " "}
//       <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | { " "}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<About />}/>
//         <Route path="/counter" element={<Counter />}/>
//         <Route path="/input1" element={<Input1 />}/>
//         <Route path="/input2" element={<Input2 />}/>
//         <Route path="/list" element={<List />}/>

//       </Routes>
      
//     </div>
//   );
// }

// mini_blog
function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>리액트 미니 블로그</MainTitleText>
       <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
