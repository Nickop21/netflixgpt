import React from 'react'
import { heroImage } from '../utils/constants'
import { lang } from '../utils/language'
import { useSelector } from 'react-redux'

const SearchGpt = () => {
  const selectedLanguage=useSelector((store)=>store.searchGptSlice.language)
  
  return (
    <div className='relative flex  justify-center w-full'>
      <img src={heroImage} alt="" className='aspect-video h-screen' />
      <div className='absolute flex flex-row mt-[20%] w-1/2  bg-black rounded mx-auto p-2 gap-3'>
        <input type="text" className='bg-white w-[90%] px-2 rounded outline-1 outline-red-600' placeholder= {lang[selectedLanguage].placeholder} />
        <button className=' bg-red-700 p-2 px-8 text-amber-50 rounded z-50'>{lang[selectedLanguage].search}</button>
      </div>
    
    </div>
  )
}

export default SearchGpt