import React from 'react'
import { Button } from './ui/button'
import { RiTimerFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 text-xl'>
            <RiTimerFill />
            <h1>Time</h1>
            
        </div>
        <Button>Logout</Button>
    </div>
  )
}

export default Navbar