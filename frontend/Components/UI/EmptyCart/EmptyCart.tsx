'use client'
import React from 'react'
import Button from '../Button/Button'

type Props = {}

function EmptyCart({}: Props) {
  return (
    <main className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl'>Oops! Looks like your cart is Empty...</h2>
        <div className='max-w-[300px] py-10'><Button onClick={()=>{location.reload()}} content='Go back to shopping'/></div>
    </main>
  )
}

export default EmptyCart