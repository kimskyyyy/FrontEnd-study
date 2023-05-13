import React, {useState} from 'react';

const Input1 = () => {
    // [useState의 기본값, num의 setter함수]
    const [textValue, setTextValue] = useState("");

    const onChange =(e) => {
        setTextValue(e.target.value);
    }


    return (
        <div>
          <input type="text" value={textValue} onChange={onChange} />
          <br />
          <p>{textValue}</p>
        </div>
    )
}

export default Input1;