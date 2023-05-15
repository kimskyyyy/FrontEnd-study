import { useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        //자식으로 가지고 있는 MainContent 컴포넌트를 ThemeContext.Provider로 감싸서 ThemeContext의 값을 하위 컴포넌트들이 사용할 수 있게 해줌
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;