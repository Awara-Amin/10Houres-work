import React, { useState } from 'react';
// Fourth way, having an object and using it in useState


const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Awara',
    age: 36,
    message: 'why are you here?'});

  // console.log(person);

// 2b* by using useState
// In this way we are not dealling with objects any more
const [name, setName] = useState('Awara')
const [age, setAge] = useState(36)
const [message, setMessage] = useState('why are you here?')


// 1b*
   // const changeMessage = () => {
   //   // setPerson({message: 'only to change the message'}) // this way wipes out all the date shown, so
   //   // we use spread operatot, below say leave what is in person but only change message
   // 1c*
   //   setPerson({ ...person, message: 'only to change the message'})
   //
   // }


// 2c*
   const changeMessage = () => {
     setMessage('only to change the message')

   }

  return (
    <>
      {/* 1a* first way to deal with objects  */}
      {/* <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2> */}

      {/* 2a* secons way to deal with objects  */}
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className='btn' onClick={changeMessage}>Lets change message</button>
    </>
  )
};

export default UseStateObject;
