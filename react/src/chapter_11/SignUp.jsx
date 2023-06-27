import React, {useState} from "react";

// SignUp 컴포넌트
function SignUp(props) {
    // <input>태그에 입력된 값을 저장하기 위한 name이라는 state를 갖음
    const [name, setName] = useState("");
    
    // 성별 값을 저장 하기위한 state 추가
    const [gender, setGender] = useState("남자");

    const [value, setValue] = useState("요청사항을 입력하세요.");

    const [fruit, setFruit] = useState("watermelon")

    
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeValue = (event) => {
        setValue(event.target.value);
    };

    const handleChangeFruit = (event) => {
        setFruit(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}, 요청사항: ${value}, 좋아하는 과일: ${fruit}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {/* 이름을 입력할 수 있는 <input>태그 */}
                이름: <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:<select value={gender} onChange={handleChangeGender}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
            </label>
            <br />
            <label>
                요청사항:<textarea value={value} onChange={handleChangeValue} />
            </label>
            <br />
            <label>
                좋아하는 과일:<select value={fruit} onChange={handleChangeFruit} >
                                <option value="apple">사과</option>
                                <option value="banana">바나나</option>
                                <option value="grape">포도</option>
                                <option value="watermelon">수박</option>
                            </select>
            </label>

            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;