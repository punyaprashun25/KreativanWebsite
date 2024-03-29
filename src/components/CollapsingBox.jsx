import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
const CollapsingBox = ({ques, ans}) => {
  return (
    <div className='collapsingBox w-full bg-white px-6 lg:px-2 lg:py-4 py-2 flex gap-4 items-center rounded-md'>
        <img src={rightArrow} alt="" className='w-7 h-7'/>
        <p className="question text-[1rem]">
          {ques}
        </p>
    </div>
  )
}

export default CollapsingBox
