import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


// Clock 컴포넌트를 가져옴
// import Clock from './chapter_04/Clock';

// Comment 컴포넌트를 가져옴
// import CommentList from './chapter_05/CommentList';

// Notification 컴포넌트를 가져옴
// import NotificationList from './chapter_06/NotificationList';

// Accommodate 컴포넌트를 가져옴
// import Accommodate from './chapter_07/Accommodate';

// ConfirmButton1 컴포넌트를 가져옴
// import ConfirmButton1 from './chapter_08/ConfirmButton1';

// ConfirmButton2 컴포넌트를 가져옴
// import ConfirmButton2 from './chapter_08/ConfirmButton2';

// ConfirmButton3 컴포넌트를 가져옴
import ConfirmButton3 from './chapter_08/ConfirmButton3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App />*/}
    {/* <Library /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <Accommodate /> */}
    {/* <ConfirmButton1 /> */}
    {/* <ConfirmButton2 /> */}
    <ConfirmButton3 />




    </BrowserRouter> 



  </React.StrictMode>
);

// setInterval( () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//       </React.StrictMode>,
//       document.getElementById('root')
//   );
// }, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
