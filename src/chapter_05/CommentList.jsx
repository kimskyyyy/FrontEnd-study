import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"sky"} comment={"안녕!!!!!!!!!"} />
            <Comment name={"dol"} comment={"애옹!!!!!!!!!"} />
        </div>
    );
}

export default CommentList;