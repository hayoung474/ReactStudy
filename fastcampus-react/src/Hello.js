import React from "react";

// camelCase naming
// 구조분해할당으로 가능
function Hello({ color, name, isSpecial }) {
  // JSX
  return (
    // 스타일이던 뭐던 중괄호로 한번 감싸줘야 함..... Vue랑 다르다 이말이야
    <div style={{ color: color }}>
      {/*단순히 내용을 보여줌/숨김 여부를 결정할때는 && , 조건에 따라 내용이 달라져야 한다면 삼항연산자 추천*/}
      {
        isSpecial && (
          <b>*</b>
        ) /*삼항연산자를 이용한 조건부 렌더링 && 연산자가 더 편함. 단축평가논리연산자임.*/
      }
      안녕하세요 {name}!
    </div>
  );
}

// default props 설정
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
