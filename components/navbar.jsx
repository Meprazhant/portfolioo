import React from 'react'
import Link from 'next/link'

function Navbar() {
    function triggerNav() {
        const navMob = document.getElementById('nav-mob')
        navMob.style.display = "flex"
        setTimeout(() => {
            navMob.style.transform = 'translateX(0)'
        }, 100);
    }
    function hideNav() {
        const navMob = document.getElementById('nav-mob')
        navMob.style.transform = 'translateX(-100%)'
        setTimeout(() => {
            navMob.style.display = "none"
        }, 500);

    }
    return (
        <div className='nav'>
            <div className="nav-logo">
                Prashant
            </div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
            {/* for mobile */}
            <div className="nav-ham" onClick={triggerNav}>
                |||
            </div>
            <div className="nav-mob" id='nav-mob'>
                <div className="nav-mob-close" onClick={() => {
                    hideNav()
                }}>
                    X
                </div>

                <Link onClick={hideNav} href="/">Home</Link>
                <Link onClick={hideNav} href="#skills">Skills</Link>
                <Link onClick={hideNav} href="#projects">Projects</Link>
                <Link onClick={hideNav} href="#contact">Contact</Link>

            </div>
        </div>
    )
}

export default Navbar