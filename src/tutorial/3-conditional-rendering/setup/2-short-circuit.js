import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const text = ''
  const [error, setError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    <h1>{text || 'hello'}</h1>
    <button className='btn' onClick={()=>setError(!error)}>show/hide</button>
    <h1>{error && 'hi'}</h1>
    <h1>{error ? 'error':'sup'}</h1>
  </>;
};

export default ShortCircuit;
