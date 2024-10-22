import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <> This is Home page
    <Link href="/humna/About"> Go to about page</Link>
    </>

  )
}

export default page