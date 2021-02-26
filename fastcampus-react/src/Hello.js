import React from 'react'

// camelCase naming
// 구조분해할당으로 가능 
function Hello({color,name}){
    // JSX 
    return(
        // 스타일이던 뭐던 중괄호로 한번 감싸줘야 함..... Vue랑 다르다 이말이야
        <div style={{color:color}}>안녕하세요 {name}!</div>
    )
}   

// default props 설정
Hello.defaultProps = {
    name:"이름없음"
}
export default Hello;