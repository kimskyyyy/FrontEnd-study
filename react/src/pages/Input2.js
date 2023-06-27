import React, {useState} from 'react';

// 여러개의 input 데이터 처리하기
const Input2 = () => {
    // [useState의 기본값, num의 setter함수]
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        tel:""
    });

    const {name, email, tel} = inputs;

    const onChange =(e) => {
        console.log(e.target.value);
        console.log(e.target.id);
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            // spread문법 객체 또는 배열을 펼칠 수 있음, 현재 상태의 내용이 여기로 온다
            ...inputs,
            [id]: value
        })
    }


    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
    
        </div>
    );
}

export default Input2;