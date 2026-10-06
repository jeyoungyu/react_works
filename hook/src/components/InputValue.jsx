import { useState } from "react"

//입력값 변경 컴포넌트 정의
const InputValue = () => {
    //빈 문자열 초기화
    const [text, setText] = useState("")
    // const [name , setName] = useState("")


    //입력값 변경 함수
    const handleInputChange = (e) =>  {
        setText(e.target.value);
        // console.log(e.target.value);

    }

    return (
        <div>
            <h2>입력값 변경</h2>
            <div>
                <input
                    type="text"
                    placeholder="입력값을 변경해보세요"
                    onChange ={handleInputChange}
                />
            </div>
            {/* <p>입력한 값: {text}</p> */}
        </div>
    )
}

export default InputValue;