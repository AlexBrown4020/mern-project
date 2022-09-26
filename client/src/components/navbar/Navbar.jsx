import './navbar.css';
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
                <img className='logoImg' src="https://iili.io/s8B7O7.jpg" alt="Life in balance logo" />
                <Link className='logo' to={'/'}>Life In Balance</Link>
                <ul className='navItems'>

                { 
                    auth && JSON.parse(auth).isAdmin ?  <Link className='navLink' to={'/create_lesson'}>Create Lesson</Link> 
                    : <></>  
                }
                    
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