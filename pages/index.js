import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <Link href='/quiz'> <button className='startBTN'>Start test now</button></Link>
    </>
  )
}

export default index
