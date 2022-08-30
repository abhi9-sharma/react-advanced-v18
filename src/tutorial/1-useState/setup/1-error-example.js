import React from 'react';


const handleClick = () =>{
  let title = 'new title';
  console.log(title);
};

const ErrorExample = () => {
  let title = 'random title'
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
      click here
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
