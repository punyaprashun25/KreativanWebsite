import React from 'react'

const ServiceBox = ({Image}) => {
  return (
    <div className='img-box w-[46%] aspect-serviceImage lg:max-w-[150px]'>
        <img src={Image} alt="" className='object-contain opacity-[0.4] hover:opacity-[0.8] transition-opacity' />   
    </div>
  )
}

export default ServiceBox
