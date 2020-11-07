import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className="main-header">
           <div className="main-header__wrapper">
                <div className="main-header__logo">
                        <Link to="/" className="main-header__link" onClick={closeMobileMenu}> 
                            <h1>TRVL<i className="fab fa-typo3"></i></h1>
                        </Link>  
                </div>
                <nav className="main-header__nav nav">  
                    <div className="nav__icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav__list nav__list--active' : 'nav__list '} >
                        <li className="nav__list-item">
                            <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__list-item">

                            <Link to="/services" className="nav__links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/products" className="nav__links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/sign-up" className="nav__links" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>    
                    </ul>
                </nav>
           </div>
           
        </header>
    )
}
