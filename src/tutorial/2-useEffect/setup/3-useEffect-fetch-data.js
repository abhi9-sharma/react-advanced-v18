import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUSers = async() =>{
    const getData = await fetch(url)
    const users = await getData.json()
    setUsers(users)
  }

  useEffect(()=>{
    getUSers()
  }, [])
  return <>
    <h2>Github Users</h2>
    <ul className='users'>
      {users.map((user)=>{
        const {id, login} = user
        return <li key={id}>{login}</li>
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
