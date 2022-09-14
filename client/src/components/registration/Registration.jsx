import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import './registration.css';

export const Registration = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=('');

    const submitData = () => {
        console.log(name, email, password)
    }

    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Register</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='text' placeholder='Enter username' 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className='submissionInput' type='password' placeholder='Enter password' 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className='submissionInput' type='email' placeholder='Enter email' 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={submitData} className='submissionButton' type='button'>Submit</button>
                </div>
            </div>
        </div>
    )
};