import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

// 물의 끓음 여부를 판단하는 BoilingVerdict 컴포넌트
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// 화씨온도를 섭씨온도로 변환하는 함수
function toCelsius(fahrenheit) {
    return((fahrenheit - 32) * 5) / 9;
}

// 섭씨온도를 화씨온도로 변환하는 함수
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 온도 값과 변환하는 함수를 파라미터로 받아서 값을 변환시켜 리턴해주는 함수
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    // 숫자가 아닌 값 입력시 빈 문자열을 리턴하도록 예외처리
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale = "c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}            
            />
            <TemperatureInput
                scale = "f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}    
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;