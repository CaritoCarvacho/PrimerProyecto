//import './navbar.styles.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <Link to='/home'>
                <button>Home</button>
            </Link>
            
            <NavLink to='/create'>
                <button>Create</button>
            </NavLink>

        </div>

    );
};

export default NavBar

