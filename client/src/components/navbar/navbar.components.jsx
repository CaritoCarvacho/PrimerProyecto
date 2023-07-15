//import './navbar.styles.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';




const NavBar = () => {
    return (
        <div>

            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/'>
                <button>Log out</button>
            </Link>

            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>

            <NavLink to='/create'>
                <button>Create</button>
            </NavLink>

            <Link to='/modify'>
                <button>Modify</button>
            </Link>

        </div>

    );
};

export default NavBar

