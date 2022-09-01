import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  
  const [isError, setIsError] = useState(false)

  const [user, setUser] = useState('default')

  const getUSers = async() =>{
    const getData = await fetch(url)
    const user = await getData.json()
    const {login} = user
    setUser(login)
    setTimeout(setIsLoading(false), 5000)
  }

  useEffect(()=>{
    getUSers()
  }, [])

  if(isLoading){
    return <>
      Loading...
    </>
  }

  if(isError){
    return <>
      Error...
    </>
  }

  return <>
    <h1>{user}</h1>
  </>;
};

export default MultipleReturns;
