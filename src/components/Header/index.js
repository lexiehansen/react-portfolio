import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <h1>Lexie Hansen</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="./About">About</Link>
                    </li>
                    <li>
                        <Link to="./Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="./Contact">Contact</Link>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1i8o6hPybK5HXRpQZLOlo4L7Rxyxm4Tr1/view?usp=sharing" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;