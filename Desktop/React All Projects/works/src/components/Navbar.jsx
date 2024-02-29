import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className=' border-b-[1px] max-w-screen-lg border-zinc-500 mx-auto p-3 flex gap-14 items-center justify-between'>
      <div className='nav-left flex items-center '>
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className='links flex gap-10 ml-20'>
        {["Home","work","Careers","","News"].map((elem,index)=> (
          elem.length === 0 ? <span key={index} className='w-[1px] h-8 bg-zinc-700 '></span> :
          <a key={index} className=' font-regular flex items-center text-sm  text-white gap-1'>
          {index === 1 && <span key={index} style={{boxShadow:"0 0 0.45em #00FF19"}} className=' inline-block w-1.5 h-1.5 bg-green-500 rounded-full '></span>}
          {elem}</a>
        ))}
      </div>
      </div>
        <div className='nav-right'>
          <Button />
        </div>
    </div>
  )
}

export default Navbar
