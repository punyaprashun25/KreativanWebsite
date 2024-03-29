import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
const CollapsingBox = ({ques, ans}) => {
  return (
    <div className='collapsingBox w-full bg-white px-8 py-6 flex gap-4 items-center rounded-lg'>
        <img src={rightArrow} alt="" className='w-7 h-7'/>
        <p className="question text-[1.25rem]">
        How long do digital marketers have to work?
        </p>
    </div>
  )
}

export default CollapsingBox
