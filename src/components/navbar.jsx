 import React from 'react'
import ThemeButton from './themeButton'
import {LogoImage} from "../components/Logo"
const Navbar = () => {
    return (
        <div>
            <nav className='navbar px-2 md:px-12 py-2 md:py-4 flex justify-between items-center' >
                <LogoImage />
                <div>
                    <ThemeButton />
                </div>
            </nav>

        </div>
    )
}

export default Navbar