import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='p-8 shadow-lg w-48 bg-white h-full'>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>
        <li>Educations</li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar