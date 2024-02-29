import React from 'react'
import Strip from './Strip'

function Strips() {

    const data = [
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",number:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",number:2},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2753d48394d8adeff14_rocket.svg",number:11},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",number:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg",number:2},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",number:11},
    ]
  return (
    <div className='flex mb-7'>
       {data.map((item,index)=>(
        <Strip key={index} val={item} />
       ))}
    </div>
  )
}

export default Strips

