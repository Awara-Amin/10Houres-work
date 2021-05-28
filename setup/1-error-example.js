
import React from 'react';
{/* First way of adding title dinamically */}

const ErrorExam ple = () => {
  let title = 'randome title name';

  const handleClick =() => {
    title = 'hello Awara';
    console.log(title);
  }
  return <React.Fragment>

    <h2>{title}</h2>
    {/*                                         and this how we can change the title */}
    <button type='button' className='btn' onClick={handleClick}>change title</button>
  </React.Fragment>
  // <h2>useState error example</h2>;
};

export default ErrorExample;
