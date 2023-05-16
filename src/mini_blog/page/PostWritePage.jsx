import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// 글 작성을 위한 페이지 PostWritePage 컴포넌트
function PostWritePage(props) {
    const navigate = useNavigate();

    // 글 제목 state
    const [title, setTitle] = useState("");
    // 글 내용 state
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                {/* 글 제목 입력 inputbox */}
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                {/* 글 내용 입력 inputbox */}
                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                {/* 글 작성 버튼 */}
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;