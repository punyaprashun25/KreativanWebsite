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
        <section className="faq-section bg-[#EDF0F5] pt-20 pb-6 w-full flex flex-col lg:flex-row">
          <Faq/>
          <iframe src="https://www.youtube.com/embed/DAsFMwu57no" title="Digital Marketing Company | Kreativan Technologies | Mohali | Chandigarh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='h-[30vh] lg:h-auto w-full rounded-sm lg:rounded-lg'>

          </iframe>
        </section>
        
    </>
  )
}

export default LandingPage
