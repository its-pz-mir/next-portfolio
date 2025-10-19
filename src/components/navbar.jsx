'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeButton from './themeButton'

const Navbar = () => {


    return (
        <div>
            <nav className='navbar px-2 md:px-12 py-2 md:py-4 flex justify-between items-center' >
                <div>
                    <Link href={"/"} >
                        <Image src={"/logo.png"} width={120} height={120} alt='Usman Shouket' />
                    </Link>
                </div>
                <div>
                    <ThemeButton />
                </div>
            </nav>

        </div>
    )
}

export default Navbar