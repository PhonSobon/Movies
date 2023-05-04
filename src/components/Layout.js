import React from 'react'
import Navbarcomponents from './Navbarcomponents'
import Foootercomponents from './Foootercomponents'

export default function Layout({children}) {
  return (
    <div className='bg-dark'>
        <Navbarcomponents/>
        <main className='bg-dark'>
            {children}
        </main>
        <Foootercomponents/>
    </div>
  )
}
