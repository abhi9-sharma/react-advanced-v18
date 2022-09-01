import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter ----> dependency array
const UseEffectBasics = () => {
  const [count, newCount] = useState(0)

  useEffect(()=>{
    console.log('call useEffect');
    if(count > 1){
      document.title = `${count}`
    }
  }, [count])
  
  useEffect(() => {
    console.log('second use effect which renders initially');
  }, [])
  
  console.log('render component');
  
  return <>
    <h1>{count}</h1>
    <button className='btn' onClick={()=>newCount(count+1)}>click</button>
  </>
};

export default UseEffectBasics;
