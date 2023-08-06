import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { signOut, useSession } from 'next-auth/react'

const Header = () => {
const {data}=  useSession()
console.log(data);
  return (
    <>
      <nav>
        
        <div className="logo"><Image alt='logo' className='logoImg' src={logo}/></div>
        <div className="navLink">
            
            {
          data?<button onClick={()=>signOut({callbackUrl: '/'})}>Logout</button>:<Link href={"/auth/signin"} className="signin">signin</Link>
        }
            
        </div>
      </nav>
    </>
  )
}

export default Header
