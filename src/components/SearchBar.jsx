import React from 'react'
import SearchIcon from '../assets/search-icon.svg'
import Cross from '../assets/close.svg'
const SearchBar = ({setShowSearchBar}) => {
  return (
    <>
        <div className="search-bar h-[7.2vh] w-full absolute top-0 left-0 bg-white px-5 flex justify-between items-center border-b-[1px] border-b-[#E0E0E0]">
            <img src={SearchIcon} alt="" className='h-7 w-7'/>
            <input type="text" placeholder='Type Your Search...' className='w-[80%] h-7 bg-transparent border-none placeholder:text-[#A9B5C9] outline-none text-[1.125rem]' />
            <img onClick={()=>setShowSearchBar(false)} src={Cross} alt="" className='h-7 w-7'/>
        </div>
    </>
  )
}

export default SearchBar
