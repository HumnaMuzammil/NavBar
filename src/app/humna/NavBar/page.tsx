import React from 'react'
import './navBar.css'
import Link from 'next/link'

function page() {
  return (
    <>
      <div className="topnav">
        <span>Humna </span>
        <Link className='active com' href=""  >Home </Link>
        <Link href="/humna/About" className='com'> About</Link>
        <Link href="/humna/Contact" className='com'> Contact</Link>
        <Link href="/humna/Service" className='com'> Services</Link>
      </div>

    </>
  )
}

export default page