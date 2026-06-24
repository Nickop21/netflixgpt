import React from 'react'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const moviesData=useSelector((store)=>store.movies.nowPlayingMovies)
  if (!moviesData) return
  const mainMovie=moviesData[2]
      const {title,overview}=mainMovie

  return (
    <div className='relative aspect-video '>
      <Videotitle title={title} overview={overview} />
      <VideoBackground/>
    </div>
  )
}

export default MainContainer