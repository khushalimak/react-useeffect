import React from 'react'
import { useEffect , useState } from 'react';

const Use_Effect_2 = ({names}) => {
    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings page ${names}`;
    });
  
    return <div  className='pl-96 pt-600 '>{message}</div>;
}

export default Use_Effect_2