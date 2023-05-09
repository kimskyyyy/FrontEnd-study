import React from "react";
import Notification from "./Notification";


const reservedNotifications = [
    {
        // Notification 컴포넌트에 전달할 props에 키와 id 추가
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

// Notification 컴포넌트를 목록형태로 보여주기 위한 NotificationList 컴포넌트
class NotificationList extends React.Component {
    // 생성자에서 state 정의
    constructor(props) {
        super(props);
        // notifications라는 이름의 빈 배열을 state에 넣어서 초기화
        this.state = {
            notifications: [],
        };
    }

    // 클래스 컴포넌트의 생명주기 함수 중 하나인 componentDidMount() 함수
    componentDidMount() {
        const { notifications } = this.state;
        // 자바스크립트의 setInterval()함수를 사용하여 매 1000ms(1초)마다 정해진 작업 수행
        // 미리 만들어둔 알림 데이터 배열인 reservedNotifications로부터 알림 데이터를 하나씩 가져와서 state에 있는 notifications배열에 넣어 업데이트
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // notifications 비우기
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                        // key, id 추가
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
