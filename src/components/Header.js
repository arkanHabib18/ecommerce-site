import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">YourLogo</div>
            <div className="search-bar">
                <input type="text" placeholder="Search for dresses..." />
            </div>
            <div className="auth-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;
