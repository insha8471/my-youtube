import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constant';
import { searchCache } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  const searchCacheResult = useSelector((store) => store.search);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCacheResult[searchQuery]) {
        setSearchSuggestion(searchCacheResult[searchQuery]);
      }else{
        getSearchSuggestion();
      }
    },200);
    
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);

    dispatch(searchCache({
      [searchQuery] : json[1]
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <header className='w-full grid grid-cols-3 p-5 shadow-lg items-center'>
      {/* Logo Section */ }
      <div className='flex items-center'>
        <img
          onClick={toggleMenuHandler}
          className='h-8 cursor-pointer'
          alt='menu'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
        />
        
        <img
          className='h-8 mx-2 cursor-pointer'
          alt='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
        />
      </div>

      {/* Search Bar */}
      <div className=''>
        <div className='flex justify-center'>
            <input
              className='w-full py-2 px-4 border outline-none border-gray-400 rounded-l-full'
              placeholder='Search'
              type='text'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onScroll={() => setShowSuggestion(false)}
            />
            <button
              className='py-2 px-4 rounded-r-full border border-gray-400'
              aria-label='Search'
            >
              🔍
            </button>
          </div>
          {(showSuggestion && searchSuggestion.length !== 0) && <div className='py-2 my-2 rounded-md shadow-md fixed bg-white w-1/3'>
            <ul className='mx-4 my-2'>
              {
                searchSuggestion?.map((val,index) => <li key={index} className='my-2 hover:bg-gray-200'>🔍 {val}</li>)
              }
              
            </ul>
          </div> }
      </div>

      {/* User Icon */}
      <div className='flex justify-end items-center'>
        <img
          className='h-8 rounded-full'
          alt='User Icon'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
        />
      </div>
    </header>
  );
};

export default Head;
