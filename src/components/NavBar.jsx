import React from 'react';
import './NavBar.css';

function NavBar() {
    return(
        <header className="header">
            <nav className="nav">
                <li className="list-nav">
                    <a href="#">
                    <img src="http://placehold.it/" alt="Muestles"/>
                    </a>
                </li>
                <li className="list-nav">
                    <a href="#">New</a>
                </li>
                <li className="list-nav">
                    <a href="#">White Line</a>
                </li>
                <li className="list-nav">
                    <a href="#">Kitchen</a>
                </li>
                <li className="list-nav">
                    <a href="#">Principal Room</a>
                        <ul>
                            <li className="list-nav">Sofa</li>
                            <li className="list-nav">Desktop</li>
                            <li className="list-nav">Furniture</li>
                            <li className="list-nav">Glass Table</li>
                        </ul>
                </li>
                <li className="list-nav">
                    <a href="#">Ingresar</a>
                </li>
            </nav>
        </header>
    )
}

export default NavBar;