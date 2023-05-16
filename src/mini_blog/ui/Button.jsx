import React from "react";
import styled from "styled-components";

// styled-components를 사용해서 만들어진 Button 컴포넌트
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;