import React from "react";
import Book from "./Book";

// Library 컴포넌트 생성
function Library(props) {
    return (
        <div>
            {/* Book 컴포넌트 렌더링 */}
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;