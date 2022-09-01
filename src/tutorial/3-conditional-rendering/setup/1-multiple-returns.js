import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [loading, setLoading] = useState(true)
  
  // setLoading(false)

  if(loading){
    return <h3>loading...</h3>
  }

  return <>
    abcd
  </>;
};

export default MultipleReturns;
