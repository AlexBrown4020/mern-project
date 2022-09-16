import React from 'react';
import { Navbar } from '../navbar/Navbar';


export const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Login</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='test' placeholder='Enter Email'></input>
                    <input className='submissionInput' type='test' placeholder='Enter Password'></input>
                    <button className='submissionButton' type='button'>Login</button>
                </div>
            </div>
        </div>
    )
};