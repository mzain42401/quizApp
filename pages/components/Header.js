import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
const isSession=  useSession()
console.log(isSession);
  return (
    <>
      <nav>
        
        <Link href={"/"} className="logo"><Image alt='logo' className='logoImg' src={logo}/></Link>
        <div className="navLink">
            
            {
          isSession?<button onClick={signOut}>Logout</button>:<Link href={"/auth/signin"} className="signin">signin</Link>
        }
            
        </div>
      </nav>
    </>
  )
}

export default Header
