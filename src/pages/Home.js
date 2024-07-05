import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Spinner from '../Components/Spinner'
import Card from '../Components/Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch,useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../app/reducers/getHomePageVideos'
function Home() {
  const dispatch=useAppDispatch();
  const videos=useAppSelector((state)=>state.youhub.videos);
  
  useEffect(()=>{
    dispatch(getHomePageVideos(false));
  },[dispatch])
  return (
    <div className='overflow-auto bg-[#212121]'>
        <div >
        <Navbar/>
        </div>
        <div className='flex'>
        <Sidebar/>
        {videos.length?(
          <InfiniteScroll dataLength={videos.length} next={()=>dispatch(getHomePageVideos(true))} hasMore={videos.length<500} loader={<Spinner/>} height={650}>
           <div className='grid gap-y-14 gap-x-8 grid-cols-5 p-8 '>
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

export default Home