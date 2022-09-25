import React, { useEffect, useState } from 'react'
import './Nav.scss'
import NetflixAvartaLogo from '../Assets/netflix avarta logo.png'
import NetflixLogo from '../Assets/Netflix logo.png'
const Nav = () => {

    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        })
            return () => {
                window.removeEventListener('scroll', handleShow)
            }
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img className='nav__logo' src={NetflixLogo} alt="Netflix Logo" />
            <img className='nav__avatar' src={NetflixAvartaLogo} alt="" />

        </div>
    )
}

export default Nav