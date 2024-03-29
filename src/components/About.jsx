import React from 'react'
import Illustration_1 from '../assets/illustration1.jpg';
const About = () => {
  return (
    <div className='about w-full lg:flex items-center flex-row-reverse gap-10'>
        <div className="info-box text-[13.5pt] leading-[1.875em] flex flex-col gap-4">
            <p className="info-1 text-justify">
                At Kreativan Technologies, we help small & midsize business enterprises across the globe, get the desired<span className='bg-white px-1'>ROI</span>through our bespoke web and allied services. The whole idea is to reach out to a wider audience locally or globally, and convert prospects to new customers. The bottomline is to increase conversion rate, visitor footfalls, traffic, sales, revenue, leads and new subscribers for any organization, across the board.
            </p>
            <p className="info-2 text-justify">
                As the <span className="font-bold">best digital marketing agency,</span> we've mastered the art of website design, development and optimization; thanks to our highly professional team of qualified web designers & developers, web analysts, SEO strategists, IT experts and digital marketers that leave no stone unturned in bolstering a site's overall performance
            </p>
        </div>
        <img src={Illustration_1} alt="" className='w-full h-auto lg:w-[40%] mt-10 rounded-bl-[3rem]' />
    </div>
  )
}

export default About
