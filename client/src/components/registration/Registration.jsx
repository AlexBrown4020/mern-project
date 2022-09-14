import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import './registration.css';
import axios from 'axios';

export const Registration = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const submitData = async () => {
        let result = await axios.fetch('http://localhost:8000/users/', {
            method:'post',
            body: JSON.stringify({
                name, email, password
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result)
    };

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