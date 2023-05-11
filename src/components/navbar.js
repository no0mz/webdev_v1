import React, {useState} from 'react';
import './navbar.css';
import {FiMenu, FiX} from 'react-icons/fi';

const Navbar = ({ navbarLinks }) => {
    const[menuClicked, setMenuClicked] = useState(false);
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    
    return (
    <nav className='navbar'> 
    <span className='navbar__logo'>Abstract-i</span>
    {menuClicked ? (
    <FiMenu size={25} className='navbar__menu' onClick={toggleMenuClick}/>
) : (
    <FiX size={25} className='navbar__menu' onClick={toggleMenuClick}/>
)}
        <ul className={
            menuClicked ? 'navbar__list' : 'navbar__list navbar__list--active'}>
            {navbarLinks.map(item => {
                return (<li className='navbar__item' key={item.title}>
                    <a className='navbar__link' href={item.url}>
                        {item.title}
                    </a>
                </li>
                );
            })}
        </ul>
    </nav>
    );
};

export default Navbar;