import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { changeSearchTerm, clearVideos } from '../features/counter/youhubSlice';
import { getSearchPageVideos } from '../app/reducers/getSearchPageVideos';
function Navbar() {
  const location=useLocation();
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  const searchTerm=useAppSelector((state)=>state.youhub.searchTerm);
  const handleSearch=()=>{
    if(location.pathname!=='/search'){
      navigate("/search")
    }
    else{
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false))
    }
  }
  return (
    <div className='bg-[#212121] px-14 h-20 flex justify-between items-center sticky opacity-95 '>
        
          <div className='text-white gap-8 text-2xl flex items-center '>
            <div>
            <GiHamburgerMenu />
            </div>
            <div className='flex items-center justify-center gap-2 '>
            <BsYoutube className='text-2l text-red-500 flex items-center justify-center' />
            <span className='text-xl font-bold flex items-center'>Youtube</span>
            </div>
          </div>
            <div className='gap-6 flex items-center justify-center  '>
              <form onSubmit={(e)=>{
                e.preventDefault();
                handleSearch();
              }}>
                <div className='flex items-center  bg-zinc-900 pl-3 h-10 px-0 rounded-3xl'>
                  <div className='flex items-center gap-4'>
                    <input className='w-96 bg-zinc-900 border-none focus:outline-none' type='text' placeholder='Search' value={searchTerm} onChange={e=>dispatch(changeSearchTerm(e.target.value))}/>
                    
                  </div>
                  <button className='h-10 w-16 flex bg-zinc-800 items-center justify-center'>
                    <AiOutlineSearch className='text-3xl' />
                  </button>
                </div>
              </form>
                <div className='text-white'>
                <FaMicrophone />
                </div>
              </div>
              <div className='flex items-center justify-content gap-8 text-2xl'>
                <RiVideoAddLine className='text-white' />
                <div className='relative'>
                <BsBell className='text-white' />
                <span className='text-white absolute bg-red-600 text-xs bottom-4 left-4'>9+</span>
                </div>
                <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qYAScSHiEKVDtK3aiap-FZWxkJCZJdzOWQ&s'/>
              </div>
            </div>
        
        
   
  )
}

export default Navbar