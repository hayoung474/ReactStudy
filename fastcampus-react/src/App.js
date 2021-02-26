import React from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Wrapper from "./Wrapper"; // 이 방법 말고도 있음. 자동완성을 통해 가능


// 함수형 컴포넌트 ... 리액느는 함수형 프로그래밍 이겠지 ?
function App() {
  return (
    <Counter/>
  );
}

export default App;
