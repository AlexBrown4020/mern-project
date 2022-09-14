import './navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <h1 className='logo'>Life In Balance</h1>
                <div className='navItems'>
                    <button className='navButton'>Login</button>
                    <button className='navButton'>Register</button>
                </div>
            </div>
        </div>
    )
}