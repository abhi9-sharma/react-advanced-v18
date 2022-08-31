import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState);
  
  const [current, setState] = useState(1);
  

  function handleClick() {
    if(current === 1){
      setState(0)
    }
    else{
      setState(1)
    }
  }
  return (
    <React.Fragment>
      <h1>{current}</h1>
      <button className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
