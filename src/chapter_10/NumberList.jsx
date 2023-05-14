import React from 'react';

function NumberList(props) {
    const {number} = props;

    const listItems = numbers.map((number) =>
    <li>{number}</li>
    );

    return (
    <ul>{listItems}</ul>
    );  
}

const numbers = [1, 2, 3, 4, 5];



export default NumberList;