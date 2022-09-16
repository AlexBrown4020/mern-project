import './navbar.css';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <h1 className='logo'>Life In Balance</h1>
                <ul className='navItems'>
                    <Link className='navLink' to={'/create_lesson'}>Create Lesson</Link>
                {   
                    auth ? <Link className='navLink' onClick={logout} to='/'>Logout</Link> 
                    : <>
                        <Link className='navLink'to={'/register'}>Register</Link>
                        <Link className='navLink' to={'/login'}>Login</Link>
                    </>}
                </ul>
            </div>
        </div>
    )
}