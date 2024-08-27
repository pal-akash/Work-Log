'use client'

import React from 'react'
import { Button } from './ui/button'
import { RiTimerFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';

function Navbar() {

  const path = usePathname()

  const isAuthPage = path === '/'

  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-2 text-xl'>
            <RiTimerFill />
            <h1>Time</h1>
        </div>
        {isAuthPage && (
          <form action="/auth/signout" method="post">
          <Button className="button block" type="submit">
            Sign out
          </Button>
        </form>
        )}
    </div>
  )
}

export default Navbar