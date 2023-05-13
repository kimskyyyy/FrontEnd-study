import React, {useState} from "react";

// 회원에게 보여줄 UserGreeting 컴포넌트
function UserGreeting(props) {
    return <h1>다시 오셨군요!!!!!</h1>
}

// 비회원에게 보여줄 GuestGreeting 컴포넌트
function GuestGreeting(props) {
    return <h1>회원가입 해주세요</h1>
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    );
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    } 
    return <GuestGreeting />;
}

function LoginControl(props) {
    //useState()훅을 사용해서 사용자의 로그인 여부를 자체적으로 관리
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    // isLoggedIn의 값에 따라서 button이라는 변수에 컴포넌트를 대입
    // 컴포넌트가 대입된 변수를 return에 넣어서 실제로 컴포넌트(실제로는 리액트 엘리먼트)가 렌더링 되도록 만들고있음
    // 엘리 먼트를 변수처럼 사용하는 방법을 엘리먼트 변수라고 함
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;

//     return(
//         <div>
//             <h1> hi!!</h1>
//             {unreadMessages.length > 0 &&
//             <h2>현재 {unreadMessages.length} 개의 읽지 않은 메시지가 있습니다.</h2>
//             }       
//         </div>
//     );
// }

// function UserStatus(props) {
//     return (
//         <div>
//             이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인 안한'}</b> 상태입니다.
//         </div>
//     );
// }

// function WarningBanner(props) {
//     if(!props.warning) {
//         return null;
//     }
//     return (
//         <div>경고!!!!!</div>
//     );
// }

// function MainPage(props) {
//     const [showWarning, setShowWarning] = useState(false);

//     const handleToggleClick = () => {
//         setShowWarning(prevShowWarning => !prevShowWarning);
//     }
    
//     return (
//         <div>
//             <WarningBanner warning={showWarning} />
//             <button onClick={handleToggleClick}>
//                 {showWarning ? '감추기' : '보이기'}
//             </button>
//         </div>
//     );
// }

export default LoginControl;