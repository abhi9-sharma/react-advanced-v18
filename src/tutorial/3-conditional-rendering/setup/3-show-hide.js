import React, { useState, useEffect } from 'react';
// show or hide a react component
const ShowHide = () => {

  const [show, setShow] = useState(false)
  return <>
    <button className='btn' onClick={()=>setShow(!show)}>toggle</button>
    {show && <Item/>}
  </>
 };

function Item() {
  const [size, setSize] = useState(window.innerWidth)

  function checkSize(){
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  
   return (
     <h1>Width: {size}px</h1>
   )
 }
 

export default ShowHide;
