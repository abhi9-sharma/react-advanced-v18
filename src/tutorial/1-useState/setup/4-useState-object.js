import React, { useState } from 'react';

const UseStateObject = () => {
  const [obj, newObj] = useState({name: 'A', age: '12', message: 'hello'})

  return <>
  <h1>{obj.name}</h1>
  <h1>{obj.age}</h1>
  <h1>{obj.message}</h1>
  <button className='btn' onClick={
    ()=>newObj({...obj, message:'random'})
  }>
    click
  </button>
  </>;
};

export default UseStateObject;
