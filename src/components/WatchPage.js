import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [ searchParams ] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  },[])
  console.log(searchParams.get("v"));
  return (
    <div>
      <div className='mt-4 ml-14'>
        <iframe width="1000" 
        className='rounded-md'
        height="600" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
        title="Post Malone – Damaged (Lyrics) ft. XXXTENTACION" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
      </div>
      <div className='ml-14 p-2'>
        < CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage;