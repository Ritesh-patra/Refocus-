import React from 'react'

function Footer() {
  return (
    <div className='mt-16 max-w-screen-lg mx-auto flex gap-4 text-white'>
      <div className=' basis-1/2 '>
        <h1 className='text-[12vw] font-semibold'>refocus.</h1>
      </div>
      <div className=' basis-1/2  pl-20 py-8 flex gap-14'>
        <div className='flex flex-col gap-2'>
            <h4 className='mb-4 text-zinc-400'>Social</h4>
            {["Instagram","Twitter(x?)","LinkedIn"].map((item,index) => (
                <a key={index} className= ' text-zinc-500' href="#">{item}</a>
            ))}
        </div>
        <div className='flex flex-col gap-2 '>
        <h4 className='mb-4 text-zinc-400'>Sitmap</h4>
            {["Home","Work","carrer","Contact"].map((item,index) => (
                <a key={index} className=' text-zinc-500' href="#">{item}</a>
            ))}
        </div>
        <div className='flex flex-col'>
            <p className=' text-right leading-5 tracking-tight'>Which nono is what we want, every thing getting fucked up</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

