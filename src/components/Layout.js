import React from 'react'
import Navbarcomponents from './Navbarcomponents'

export default function Layout({children}) {
  return (
    <div>
        <Navbarcomponents/>
        <main>
            {children}
        </main>
    </div>
  )
}
