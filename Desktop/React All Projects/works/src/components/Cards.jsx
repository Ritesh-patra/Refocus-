import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className=' max-w-screen-lg mt-20  mx-auto flex gap-2'>
      <Card width={"basis-1/3"} start={false} para={true} />
      <Card width={"basis-2/3"} start={true} para={false} hover={true} />
    </div>
  )
}

export default Cards
