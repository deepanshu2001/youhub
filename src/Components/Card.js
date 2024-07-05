import React from 'react'

function Card({data}) {
   
  return (
    <div className='w-64 h-60 flex gap-3 flex-col'>
        <div  className='relative'>
            
                <span className='absolute bottom-3 right-3 text-sm  px-2 py-0.5 z-10 text-white '>{data.videoDuration}</span>
                <img className='h-44 w-72' src={data.videoThumbnail} alt='Photo'/>
            
            <div className='flex gap-2'>
                <div className='min-w-fit'>
                    <a href="#">
                        <img className='h-9 w-9 rounded-full' src={data.channelInfo.image}/>
                    </a>
                </div>
                <div>
                    <h3>
                        <a className='line-clamp-2 text-white' href='#'>{data.videoTitle}</a>
                    </h3>
                    <div className='text-sm text-gray-500'>
                        <div>
                            <a className='hover:text-white' href='#'>
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className='mr-2'>
                                {data.videoViews} views
                            </span>
                            <span >
                                {data.videoAge }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card