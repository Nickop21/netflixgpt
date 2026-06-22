import React from 'react'
import netflixsvg from '../assets/netflix.svg'

const Header = () => {
  return (
    <div className='w-full px-8 flex justify-between'>
       <img src={netflixsvg} alt="" className='w-32  netflix'/>
       <button className='p-2 px-4 rounded text-amber-50 font-bold bg-red-700 hover:bg-red-600'>Sign out</button>

    </div>
  )
}

export default Header