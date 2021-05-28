import React, { useState } from 'react';
// Part B, here we work on the second part of useState which the function [variable, function]! The function can have another function in it


const UseStateCounter = () => {
  const [value, setValue] = useState(0);



  // reffrence function
  const reset = () => {
    setValue(0);
  }

// this way we just give sometime to add the value
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {     // OR like that kaka setValue(function (prevState) {
        return prevState + 1;
      })
    }, 2000)

  }

  return <>
  <section style={{margin: '4rem 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
                                   {/* inline function */}
    <button className='btn' onClick={()=> setValue (value -1)}>decrease</button>
    <button className='btn'onClick={reset}>reset</button> {/* reffrence function */}
    <button className='btn' onClick={()=> setValue (value +1)}>increase</button> {/* inline function */}

  </section>



  <section style={{margin: '4rem 0'}}>
    <h2>More complex counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={complexIncrease}>Increase a bit later</button>
                                   {/* inline function */}
    {/* <button className='btn' onClick={()=> setValue (value -1)}>decrease</button>
    <button className='btn'onClick={reset}>reset</button> {/* reffrence function */}
    {/* <button className='btn' onClick={()=> setValue (value +1)}>increase</button> {/* inline function */}

  </section>

  </>
};

export default UseStateCounter;
