import React from 'react';
import { Navbar } from '../navbar/Navbar';

export const Registration = () => {
    return (
        <div>
            <Navbar/>
            <h2>Register</h2>
            <div className='formContainer'>
                <input className='submissionInput' type='text' placeholder='Enter username' />
                <input className='submissionInput' type='password' placeholder='Enter password' />
                <input className='submissionInput' type='email' placeholder='Enter email' />
                <button className='submissionButton' type='button'>Submit</button>
            </div>
        </div>
    )
};