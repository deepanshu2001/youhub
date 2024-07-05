import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
import Card from '../Components/Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch,useAppSelector } from '../hooks/useApp'

import { useNavigate } from 'react-router-dom'
import { clearVideos } from '../features/counter/youhubSlice'
import { getSearchPageVideos } from '../app/reducers/getSearchPageVideos'
function Search() {
  const navigate=useNavigate();
  const dispatch=useAppDispatch();
  const videos=useAppSelector((state)=>state.youhub.videos);
  const searchTerm=useAppSelector((state)=>state.youhub.searchTerm)
  useEffect(()=>{
    dispatch(clearVideos());
    if(searchTerm===""){
      navigate("/")
    }else{
      dispatch(getSearchPageVideos(false));
    }
  },[dispatch,navigate,searchTerm])
  return (
    <div className='overflow-auto'>
        <div >
        <Navbar/>
        </div>
        <div className='flex'>
        <Sidebar/>
        {videos.length?(
          <InfiniteScroll dataLength={videos.length} next={()=>dispatch(getSearchPageVideos(true))} hasMore={videos.length<500} loader={<Spinner/>} height={650}>
           <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8 '>
             {videos.map((item)=>{
              return <Card data={item} key={item.videoId}/>
             })}
           </div>
          </InfiniteScroll>
        ):(
          <Spinner/>
        )}
        
        </div>
        
    </div>
  )
}

export default Search