// props children 을 익히기 위한 컴포넌트

import React from 'react'

function Wrapper({children}){
    const style={
        border:'2px solid black',
        padding:16
    };

    return (
        <div style={style}>{children}</div>
    )
}

export default Wrapper;