import React from 'react'
import Illustration_1 from '../assets/illustration1.jpg';
const About = () => {
  return (
    <div className='about w-full bg-[#EDF0F5] pt-28 px-10 pb-6'>
        <div className="info-box text-[13.5pt] leading-[1.875em]">
            <p className="info-1">
                At Kreativan Technologies, we help small & midsize business enterprises across the globe, get the desired <span> ROI </span>through our bespoke web and allied services. The whole idea is to reach out to a wider audience locally or globally, and convert prospects to new customers. The bottomline is to increase conversion rate, visitor footfalls, traffic, sales, revenue, leads and new subscribers for any organization, across the board.
            </p>
            <p className="info-2">
                As the best digital marketing agency, we’ve mastered the art of website design, development and optimization; thanks to our highly professional team of qualified web designers & developers, web analysts, SEO strategists, IT experts and digital marketers that leave no stone unturned in bolstering a site’s overall performance
            </p>
        </div>
        <img src={Illustration_1} alt="" className='w-full h-auto lg:w-[40%] mt-10 rounded-bl-[4.5rem]' />
    </div>
  )
}

export default About
