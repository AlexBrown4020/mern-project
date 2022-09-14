import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import './registration.css';

export const Registration = () => {
    const [username, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const submitData = async () => {
            let result = await fetch('http://localhost:8000/users', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: {
                username, email, password
            },
        }).then((response) => response.json())
        .then((data) => {
            console.log(data)
        });
        console.log(result)
    };

    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Register</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='text' placeholder='Enter username' 
                        value={username} onChange={(e) => setName(e.target.value)}/>
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