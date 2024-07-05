import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
function Sidebar() {
  const mainLinks=[
    {
        icon:<MdHomeFilled/>,
        name:'Home'
    },
    {
        icon:<MdOutlineSlowMotionVideo  />,
        name:'Shorts'
    },{
        icon:<MdSubscriptions />,
        name:'Subscriptions'
    }
  ]

  const otherLinkes=[
    {
        icon:<MdOutlineVideoLibrary />,
        name:'Library'
    },{
        icon:<MdHistory className='text-xl'/>,
        name:'History'
    },{
        icon:<MdOutlineWatchLater />,
        name:'Watch Later'
    },
    {
        icon:<LuThumbsUp />,
        name:'Liked'
    }
  ]
  return (
    <div className='bg-[#212121] text-2xl h-screen w-2/12 text-white pr-5 overflow-auto pb-8 '>
        <ul className='flex flex-col border-b-2 border-gray-600 '>
            {mainLinks.map(
                (item)=>{
                    return (
                        <li className={`pl-6 py-3 hover:bg-zinc-600 ${item.name==='Home'?"bg-slate-600":""} rounded-xl`} key={item.name}>
                        <a href='#' className='flex items-center gap-5'>{item.icon}
                        <span className='text-sm tracking-wider'>{item.name}</span>
                        </a>
                        
                        </li>
                    )
                    
                }
            )}
        </ul>

       
        <ul className='flex flex-col border-b-1 border-gray-800 '>
            {otherLinkes.map(
                (item)=>{
                    return (
                        <li className={`pl-6 py-3 hover:bg-zinc-600 ${item.name==='Home'?"bg-slate-600":""}rounded-xl`} key={item.name}>
                        <a href='#' className='flex items-center gap-5'>{item.icon}
                        <span className='text-sm tracking-wider'>{item.name}</span>
                        </a>
                        
                        </li>
                    )
                    
                }
            )}
        </ul>
    </div>

    
  )
}

export default Sidebar