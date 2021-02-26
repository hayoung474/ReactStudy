import React, { useState } from "react";

function Counter() {
  // useState 를 이용하여 number 라는 상태를 만듬. 기본값은 0이며 setState 로 변경해야 함.불변성 때문에
  // 구조분해할당 문법을 통해 아래와 같은 문법 작성 가능
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number => number+1); // ++ 불가능. 함수형 업데이트는 최적화와 관련이 있음.
    console.log("+1");
  };
  const onDecrease = () => {
    setNumber(number => number-1); // -- 불가능
    console.log("-1");
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* 함수 넣을 때 ()를 붙여버리면 렌더링 할 때 함수를 실행하겠다는 뜻.
      그러니 클릭할 때 함수를 실행시키고 싶다면 ()를 붙여서는 안된다. 주의하자.
      */}
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
