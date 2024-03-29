import React from 'react'
import { useState } from 'react';
import { Navbar, Sidebar, Heading, About, Service, Faq} from '../components'


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
        <Heading/>
        <section className="main-section bg-[#EDF0F5] pt-28 px-10 pb-6 w-full flex flex-col gap-10">
          <About/>
          <Service />
        </section>
        <section className="faq-section bg-[#EDF0F5] pt-28 pb-6 w-full flex flex-col gap-10">
          <Faq/>
        </section>
        
    </>
  )
}

export default LandingPage
