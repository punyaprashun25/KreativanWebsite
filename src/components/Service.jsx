import React from 'react'
import ServiceBox from './ServiceBox'
import webdev from '../assets/webDev.jpg'
import Graphic from '../assets/graphicDesign.jpg'
import Android from '../assets/android.jpg';
import GoogleAds from '../assets/googleAds.jpg';
import Ios from '../assets/ios.jpg'
import Seo from '../assets/seo.jpg'
import Training from '../assets/training.jpg'
const Service = () => {
    return (
        <div className='service-box w-full flex flex-wrap gap-8 justify-center'>
            <div className="pair flex justify-between">
                <ServiceBox Image={webdev} />
                <ServiceBox Image={Graphic} />
            </div>
            <div className="pair flex justify-between">
                <ServiceBox Image={Android} />
                <ServiceBox Image={GoogleAds} />
            </div>
            <div className="pair flex justify-between">
                <ServiceBox Image={Ios} />
                <ServiceBox Image={Seo} />
            </div>
            <div className="single w-full">
                <div className='img-box  w-[65%] aspect-serviceImage lg:max-w-[150px]'>
                    <img src={Training} alt="" className='object-contain opacity-[0.4] hover:opacity-[0.8] transition-opacity' />
                </div>
            </div>
        </div>
    )
}

export default Service
