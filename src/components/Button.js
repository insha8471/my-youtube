import React from 'react'

const Button = ({name}) => {
  return (
    <div className='p-2 m-2'>
      <button className='bg-gray-400 px-4 py-2 rounded-lg mr-1'>{name}</button>
    </div>
  )
}

export default Button