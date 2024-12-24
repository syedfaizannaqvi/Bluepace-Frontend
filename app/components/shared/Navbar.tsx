import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
const Navbar = () => {
  return (
    <nav className='bg-[#043873] w-screen'>
        <div className='flex justify-between items-center sm:w-[95vw] md:w-[80vw] w-[80vw] h-[82px] mx-auto'>
            <div>
                <Image src='/Logo.png' alt="logoImage" height={34} width={191} className=' flex justify-center items-center min-w-[150px] ' />
            </div>
            <div className='flex justify-between items-center h-[50px] sm:gap-[40px] gap-[30px] md:gap-[60px]'>
                <div  >
                    <ul className=' flex justify-center items-center  gap-[10px] md:gap-[32px] sm:gap-5 sm:text-light sm:text-[11px] text-[11px] md:text-[15px]'>
                        <li className='text-white font-semibold'><Link href="/">Products</Link> </li>
                        <li className='text-white font-semibold'><Link href="/">Solutions</Link> </li>
                        <li className='text-white font-semibold'><Link href="/">Resources</Link> </li>
                        <li className='text-white font-semibold'><Link href="/">Pricings</Link> </li>

                        
                    </ul>

                </div>
                <div>
                    <Button btnTitle="Login" btnTitleColor="white" btnBg="bg-[#FFE492]"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar