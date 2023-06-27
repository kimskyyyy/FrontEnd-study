import React from "react";
import Comment from "./Comment";

// 데이터를 별도의 객체로 분리해서 동적으로 받아온 데이터를표시할 수 있는 구조로 만들기

// map()함수를 써서 각 댓글 객체에 대해서 Comment 컴포넌트를 리턴하도록 코드 작성
function CommentList(props) {
    return (
        <div>
             {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

// comments 배열에 댓글 데이터를 담고 있는 객체를 넣어줌
const comments = [
    {
        name: "sky",
        comment: "안녕!!!!!!!!.",
    },
    {
        name: "돌이",
        comment: "애옹~!",
    },
    {
        name: "솔이",
        comment: "냐",
    },
];


export default CommentList;