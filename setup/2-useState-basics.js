
import React, { useState } from 'react';
{/* Second way of adding title dinamically */}

const UseStateBasics = () => {
  // console.log(useState('hello world'));

  const [text, setText] = useState('random title');

  const handleClick= ()=> {
    // setText('Awara you did it')
    // changing the title using conditions
    if (text=== 'random title') {
      setText('Awara you did it')
    } else {
      setText('random title')
    }
  }

  return <React.Fragment>
    <h2>{text}</h2>
    <button className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>

};

export default UseStateBasics;
