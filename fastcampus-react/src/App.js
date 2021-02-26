
import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper' // 이 방법 말고도 있음. 자동완성을 통해 가능

function App() {
  return (
    <Wrapper>
    
      <Hello name="react" color="red"/> {/* hello component */}
      <Hello color="green"/>
    </Wrapper>
  );
}

export default App;
