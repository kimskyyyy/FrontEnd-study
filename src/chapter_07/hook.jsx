import React, { useState } from "react";

// Counter 함수 컴포넌트
function Counter(props) {
    const[count, setCount] = useState(0);

    return (
        <div>
            {/* 버튼 클릭 시 카운트를 하나씩 증가시키고 현재 카운트를 보여주고
            count의 값이 변경되면 컴포넌트가 재렌더링되면서 화면에 새로운 카운트 값 표시*/}
            <p>총 {count}번 클릭했습니다.</p> 
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </div>
    );
}


    