import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './store';

// import {BrowserRouter} from 'react-router-dom'
// import App from './App'; 


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
// import ConfirmButton3 from './chapter_08/ConfirmButton3';

// LandingPage 컴포넌트를 가져옴
// import LandingPage from './chapter_09/LandingPage';

// import LoginControl from './chapter_09/LoginControl';

// import AttendanceBook from './chapter_10/AttendanceBook';

// import NumberList from './chapter_10/NumberList';

// import SignUp from './chapter_11/SignUp';

// import Calculator from './chapter_12/Calculator';

// import ProfileCard from './chapter_13/ProfileCard';
// import WelcomDialog from './chapter_13/WelcomDialog';
// import SignUpDialog from './chapter_13/SignUpDialog';

// import DarkOrLight from './chapter_14/DarkOrLight';

// import ReduxApp from './beforeRedux/ReduxApp';
// import ReduxApp from './afterRedux/ReduxApp';
  // import ReduxApp from './react_Redux/ReduxApp';
  
import App from './react_ajax/App';


// import {Provider} from 'react-redux';
// import store from './beforRedux/store';

// import Blocks from './chapter_15/Blocks';
// import MainPage from './chapter_15/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <App />*/}
    {/* </BrowserRouter>  */}

    {/* <Library /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <Accommodate /> */}
    {/* <ConfirmButton1 /> */}
    {/* <ConfirmButton2 /> */}
    {/* <ConfirmButton3 />*/}
    {/* <LandingPage /> */}
    {/* <LoginControl /> */}
    {/* <AttendanceBook /> */}
    {/* <NumberList /> */}
    {/* <SignUp /> */}
    {/* <Calculator /> */}
    {/* <ProfileCard />
    <WelcomDialog />
    <SignUpDialog /> */}
    {/* <DarkOrLight /> */}
    {/* <Blocks />
    <MainPage /> */}
    {/* <App /> */}
    {/* <Provider store={store}>
    <ReduxApp />
    </Provider> */}
    {/* <Provider store={store}>
      <ReduxApp />
    </Provider> */}

    <App />
    









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
