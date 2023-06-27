import React, { useState } from "react";

// useCounter 함수 컴포넌트
// 초기 카운트 값 initialValue를 파라미터로 받음
function useCounter(initialValue) {
    // count라는 이름의 state 생성
    const[count, setCount] = useState(initialValue);

    // 카운트 증가
    const increaseCount = () => {
        setCount((count) => count + 1)
    }

    // 카운트 감소
    const decreaseCount = () => {
        setCount((count) => Math.max(count - 1, 0));
    }

    return[count, increaseCount, decreaseCount];
}

export default useCounter;


    