import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [names, newName] = React.useState(data)
  return <>
    {
      names.map((x)=>{
        const {id, name} = x;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className='btn' onClick={()=>newName(names.filter((name)=>name.id!==id))}>clear</button>
          </div>
        )
      })
    }
    <button className='btn' onClick={()=>newName([])}>clear all</button>
  </>
};

export default UseStateArray;
