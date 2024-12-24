import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-[#043873] md:h-[461px] md:pt-[90px] md:px-[140px] md:pb-[32px]'>
        <div className='gap-[100px] h-[289px] w-[95vw] text-white' >
            <div className='flex justify-evenly items-between gap-4'>
                <div className='h-[127px] w-[260px] mr-[100px]'>
                    <Image src='/Logo.png' alt='LogoImage' height={34} width={161} />
                    <p className='font-normal text-[16px] leading-[30px]'>
                    whitepace was created for the new ways we live and work. We make a better workspace around the world
                    </p>
                </div>
                <div className='h-[127px] w-[295px] gap-4 mt-[-6px]'>
                    <Link href='/'><h1 className='font-bold text-lg leading-9'>Products</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Overview</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Pricing</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Customer stories</h1></Link>

                </div>
                <div className='h-[127px] w-[295px] gap-4 mt-[-6px]'>
                    <Link href='/'><h1 className='font-bold text-lg leading-9'>Resources</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Blog</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Guides & tutorials</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Help center</h1></Link>

                </div>
                <div className='h-[127px] w-[295px] gap-4 mt-[-6px]'>
                    <Link href='/'><h1 className='font-bold text-lg leading-9'>Company</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>About us</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Careers</h1></Link>
                    <Link href='/'><h1 className='font-normal text-base leading-8'>Media kit</h1></Link>

                </div>

            </div>

            <div>

            </div>
        </div>
                <div className='text-center text-white text-base font-normal leading-5 mt-10'>
                    <p>©2021 Whitepace LLC.</p>
                </div>
    </footer>
  )
}

export default Footer