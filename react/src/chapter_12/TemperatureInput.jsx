// 단위를 나타내는 scale
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

// TemperatureInput 컴포넌트: 온도를 입력받는 부분
// props로 scale과 Temperature를 받아서 표시해줌
function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            {/* 온도 value가 변경된 경우 props의 onTemperatureChange()함수 호출하여 상위 컴포넌트로 변경된 값 전달 */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;