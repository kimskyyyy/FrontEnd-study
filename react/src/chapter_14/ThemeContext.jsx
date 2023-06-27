import React from "react";

// ThemeContext라는 이름의 컨텍스트 생성
const ThemeContext = React.createContext();

// 개발자 도구를 통해 컨텍스트의 이름을 확인하기 위해서 ThemeContext의 displayName값 설정
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;