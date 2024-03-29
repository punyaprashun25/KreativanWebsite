import React from 'react'
import { useState } from 'react';
import { Navbar, Sidebar, Heading} from '../components'
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
        <section className='w-full px-4 py-8'>

          <Heading/>
        </section>
    </>
  )
}

export default LandingPage
