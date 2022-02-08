import React from 'react';
import './NavBar.css';
import IconMenu from './CartWidget';

function NavBar() {
    return(
        <header className="header">
            <nav className="nav">
                <li className="list-nav">
                    <a href="#" className="icon">
                        <IconMenu/>
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
                        <ul className="bg-menu">
                            <li className="list-nav">
                                <a href="#">Sofa</a></li>
                            <li className="list-nav">
                                <a href="#">Desktop</a></li>
                            <li className="list-nav">
                                <a href="#">Furniture</a></li>
                            <li className="list-nav">
                                <a href="#">Glass Table</a></li>
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