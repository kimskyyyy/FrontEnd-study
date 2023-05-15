import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// MainContent 컴포넌트: ThemeContext로부터 현재 설정된 테마 값을 받아와 실제 화면의 콘텐츠를 렌더링함
function MainContent(props) {
    // useContext()훅을 사용해서 ThemeContext를 가져옴
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
            {/* 테마 변경을 클릭한 경우 ThemeContext로부터 받은 toggleTheme() 함수 호출하여 ThemeContext의 값 변경 */}
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;