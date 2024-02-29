import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[16.66%] py-3 mt-10 px-5 items-center flex justify-between border-b-[1px] border-t-[1px] border-r-[1px]'>
      <img className=' object-cover ' src={val.url} alt="" />
      <span className=' text-white font-semibold'>{val.number}</span>
    </div>
  )
}

export default Strip
