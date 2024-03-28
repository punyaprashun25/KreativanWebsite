import React, { useState } from 'react'
import WhiteIcon from './WhiteIcon'
import Logo from '../assets/kreativan5-01.png'
import searchIcon from '../assets/search-icon.svg'
import Hamburger from '../assets/hamburger.svg'
import SearchBar from './SearchBar'
const Navbar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const searchBarHandler = ()=>{
        setShowSearchBar(true);
    }
    return (
        <nav className="navbar h-[12vh] w-full  flex items-center justify-between px-4">
            {
                showSearchBar
                ?
                <SearchBar setShowSearchBar={setShowSearchBar}/>
                :
                <></>
            }
            <img src={Logo} alt="" className='w-[16.625rem] aspect-[266 / 67]' />
            <div className="right-box flex items-center">
                <img src={searchIcon} onClick={searchBarHandler} alt="" className='w-5 h-5'/>
                <WhiteIcon/>
                <img src={Hamburger} alt=""  className='h-10 w-10'/>
            </div>
        </nav>
    )
}

export default Navbar;
