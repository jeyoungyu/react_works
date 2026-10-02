//외부 컴포넌트 생성
//조건부 렌더링


const Example01 = () => {
    const isLoggedIn = true;
    let result = "";
    if (isLoggedIn) {
        result = <h3>로그인 상태입니다.</h3>;
    } else {
        result = <h3>로그아웃 상태입니다.</h3>;
    }

    return (
        <div>
            <h2>조건부 렌더링</h2>
            {result}    
            {/* 삼항연산자 사용 */}
            {isLoggedIn ?
                <p>로그인 상태입니다</p> :
                <p>로그아웃 상태입니다</p>
            }

            {/* && 연산자 사용 */}
            {isLoggedIn && <p>로그인 상태입니다</p>}
        </div>
    )
}

//내보내기
export default Example01;