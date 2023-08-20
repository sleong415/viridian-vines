import '../styles/Nav.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Cart from './Cart'
import CartIcon from './CartIcon'

export default function Nav() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 870);
        };

        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const handleCartClick = () => {
        setShowOverlay(!showOverlay);
    }

    return (
        <nav className="navbar">
            <div className='navbar-layout'>
                <div className="navbar-center">
                <Link to="/" className="home-img">
                    <img src='/images/green-logo.png' className="navbar-img" alt="viridian vines logo" />
                </Link>
                    <div className="navbar-links">
                        { isSmallScreen ? (
                            <>
                                <Link to="/plants" className="navbar-item">Plants</Link>
                                <a>Other</a>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="navbar-item">Home</Link>
                                <Link to="/plants" className="navbar-item">Plants</Link>
                                <a>Plant Care</a>
                                <a>About</a>
                            </>
                        )}
                    </div>
                    <CartIcon func={handleCartClick} numberDisplay={true}/>
                </div>
            </div>
            <Cart className="cart-overlay" isOpen={showOverlay} onCloseCart={() => setShowOverlay(false)}/>
        </nav>
    )
}
