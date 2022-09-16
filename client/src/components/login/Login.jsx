import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';


export const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => {
    console.warn(username, password)
}

    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Login</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='text' placeholder='Enter Username' onChange={(e) => {
                        setUsername(e.target.value)}} value={username}></input>
                    <input className='submissionInput' type='password' placeholder='Enter Password' onChange={(e) => {
                        setPassword(e.target.value)}} value={password}></input>
                    <button onClick={handleLogin} className='submissionButton' type='button'>Login</button>
                </div>
            </div>
        </div>
    )
};