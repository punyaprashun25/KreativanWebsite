import React from 'react'
import Cross from '../assets/close-white.svg'
const Sidebar = ({setShowSideBar}) => {
    const sideBarHandler = ()=>{
        setShowSideBar(false);
    }
  return (
    <div className="sidebar w-[77%] md:max-w-[320px] h-screen absolute right-0 bg-[#121b1d] text-white font-medium top-0 flex flex-col gap-6 px-8">
        <div className="top-bar w-full h-16 flex justify-end items-center">
            <img src={Cross} alt="" className='w-7 h-7 hover:bg-[#00bbee]' onClick={sideBarHandler}/>
        </div>
        <div className="link-box flex flex-col gap-4">
            <a href="#Home" className=' py-6 border-b border-b-[#F3F3F3]'>
                <p className="text hover:text-[#00bbee]">HOME</p>
            </a>
            <a href="#About" className=' py-6 border-b border-b-[#F3F3F3]'>
                <p className="text hover:text-[#00bbee]">ABOUT US</p>
            </a>
            <a href="#services" className=' py-6 border-b border-b-[#F3F3F3]'>
                <p className="text hover:text-[#00bbee]">SERVICES</p>
            </a>
            <a href="#training" className=' py-6 border-b border-b-[#F3F3F3]'>
                <p className="text hover:text-[#00bbee]">TRAINING</p>
            </a>
            <a href="#placement" className=' py-6 border-b border-b-[#F3F3F3]'>
                <p className="text hover:text-[#00bbee]">PLACEMENT DRIVE</p>
            </a>
        </div>
        <button className='bg-[#00dbb0] text-white w-[65%] px-2 rounded-lg py-5'>REGISTRATION FORM</button>
        
    </div>
  )
}

export default Sidebar
