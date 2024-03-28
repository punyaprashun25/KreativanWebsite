import React from 'react'
import { useState } from 'react';
import { Navbar, Sidebar} from '../components'
const LandingPage = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  
  return (
    <>
        <Navbar showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} setShowSideBar = {setShowSideBar}/>
        {
          showSideBar
          ?
          <Sidebar setShowSideBar={setShowSideBar}/>
          :
          <></>
        }
    </>
  )
}

export default LandingPage
