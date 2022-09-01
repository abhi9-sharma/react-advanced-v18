import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, newSize] = useState(window.innerHeight)
  console.log(size);
  
  function checkSize() {
    newSize(window.innerWidth)
  }
  useEffect(()=>{
    console.log('useEffect function');
    window.addEventListener('resize', checkSize)

    // below is cleanup function, initially useEffect runs first but after re-render, useEffect function run after clean up function
    return ()=>{
      console.log('cleanup function');
      window.removeEventListener('resize', checkSize)
    }
  }) //we cn achieve what cleanup function is doing here by simply adding a empty dependency array which remove the use of 
    //cleanup function. It will allow useEffect to run once only
    // and if we do that, event listener is added once and we get desired output.

  console.log('render');
  return <>
    <h1>window size is {size}px</h1>
  </>;
};

export default UseEffectCleanup;
