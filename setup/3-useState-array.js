
import React from 'react';
// third way, having an arrey and using it in useState
import {data} from '../../../data';

const UseStateArray = () => {
  //                    this React can be used if you dont want to use useState above :)
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    // alert('u did');

    //  it says do filter (or remove) only the one with id I have added (or clicked) among all (id) es.
    let newPeople = people.filter((person)=> person.id !== id) // this symbole (!==) means matches
      setPeople(newPeople)
  }


// KAKA the previousPeople is the same people ha dont freakout ! BOTH ARE THE SAME
// **************** Remove here if you want to work*********************************************************
// Awara this way is related to 6-useState part B, using function in function
  //  it says do filter (or remove) only the one with id I have added (or clicked) among all (id) es.
  setPeople((previousPeople) => {
    let newPeople = previousPeople.filter((person)=> person.id !== id); // this symbole (!==) means matches
    setPeople(newPeople);
});
}
// *************************************************************************



  return (
    <> {
    people.map((person) => {
      // destructuring the array's properties LOVEEEEEEEEE
      const {id, name} = person;
      // console.log(person);
      return (
      // when we have arrey, we need the Key
      <div key={id} className='item'>
        <h4>{name}</h4>
        {/* <h5>{id}</h5> */}
        {/* Remove name s one by one based on id and using reffrence function (reffrence function means it is not added inline) */}
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>);
      // 'hello';
    })}
    {/*                              Here setPeople function has been used inline LOVEEE */}
    <button className= 'btn' onClick={() => setPeople([])}>Delet Buttons</button>
</>
);
};


export default UseStateArray;
