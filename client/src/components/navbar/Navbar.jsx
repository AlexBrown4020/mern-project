import './navbar.css';
import {useState} from 'react';
import { Registration } from '../registration/Registration';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const auth = localStorage.getItem('user')
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <h1 className='logo'>Life In Balance</h1>
                <ul className='navItems'>
                    <Link className='navLink' to={'/create_lesson'}>Create Lesson</Link>
                    <Link className='navLink' to={'/login'}>Login</Link>
                    {auth ? <Link className='navLink' to={'/logout'}>Logout</Link> : <Link className='navLink'to={'/register'}>Register</Link>}
                </ul>
            </div>
        </div>
    )
}