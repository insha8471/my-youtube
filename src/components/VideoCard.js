import React from 'react';

const VideoCard = ({info}) => {
    // console.log(info);
    // const { snippet, statistics } = info;
    // const { channelTitle, thumbnails, title } = snippet;
    return (
    <div className=''> 
      <div className='p-2 m-3 w-80 h-80 shadow-lg cursor-pointer'>
          <img className='rounded-lg' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
          <ul>
            <li className='font-bold py-2 '>{info?.snippet?.channelTitle}</li>
            <li className='text-gray-600'>{info?.snippet?.title}</li>
            <li className='text-gray-600'>{info?.statistics?.viewCount} views</li>
          </ul>

      </div>
    </div>
  )
}

export default VideoCard;