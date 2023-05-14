import React from "react";

// 학생 정보가 담긴 배열 Students
const Students = [
    {
        id: 1,
        name: "sky",
    },
    {
        id: 2,
        name: "dol",
    },
    {
        id: 3,
        name: "sol",
    }
];


function AttendanceBook(props) {
    return (
        <ul>
            {/* 배열을 렌더링 하기 위해 map()함수 사용 */}
            {Students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;