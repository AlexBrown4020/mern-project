import './navbar.css';
import {useState} from 'react';
import { Registration } from '../registration/Registration';

export const Navbar = () => {
    const [isShown, setIsShown] = useState(false)

    const handleClickRegister = event => {
        setIsShown(current => !current)
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <h1 className='logo'>Life In Balance</h1>
                <div className='navItems'>
                    <button className='navButton'>Login</button>
                    <button onClick={handleClickRegister} className='navButton'>Register</button>
                    {isShown && (
                        <h2>Example Registration page</h2>
                    )}
                </div>
            </div>
        </div>
    )
}