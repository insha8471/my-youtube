import React from 'react';
import Button from './Button';

const ButtonList = () => {
    const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "Cooking", "Movies","Sports",
        "Football"
    ];
  return (
    <div className='flex ml-4 '>
        {
            list.map((item,index) => <Button key={index} name={item}/>)
        }
    </div>
  )
}

export default ButtonList