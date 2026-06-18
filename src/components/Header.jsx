import React from 'react'
import netflixsvg from '../assets/netflix.svg'

const Header = () => {
  return (
    <div className='w-full'>
       <img src={netflixsvg} alt="" className='w-32 bg-red-600 '/>

    </div>
  )
}

export default Header