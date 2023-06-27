import React, {useState} from "react";

// 함수 컴포넌트로 작성
function ConfirmButton3 (props) {
    const[isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((preIsConfirmed) => !preIsConfirmed);
    };


    return (
        // 버튼을 클릭하면 handleConfirm() 호출
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );

}

export default ConfirmButton3;