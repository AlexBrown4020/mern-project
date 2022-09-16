import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';


export const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => {
    console.warn(email, password)
}

    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Login</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='test' placeholder='Enter Email' onChange={(e) => {
                        setEmail(e.target.value)}} value={email}></input>
                    <input className='submissionInput' type='test' placeholder='Enter Password' onChange={(e) => {
                        setPassword(e.target.value)}} value={password}></input>
                    <button onClick={handleLogin} className='submissionButton' type='button'>Login</button>
                </div>
            </div>
        </div>
    )
};