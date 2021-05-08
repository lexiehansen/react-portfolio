import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="flex-row px-1 header">
            <h1 className="logo">
                <a href="/react-portfolio/">Lexie Hansen</a>
            </h1>

            <nav className="header-nav navbar">
                <ul className="flex-row nav-list">
                    <li className="mx-2">
                        <Link className="header-link" to="./About">About</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="header-link" to="./Portfolio">Portfolio </Link>
                    </li>
                    <li className="mx-2">
                        <Link className="header-link" to="./Contact">Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="header-link" to="./Resume">Resume</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;