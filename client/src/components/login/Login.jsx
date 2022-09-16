import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';


export const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

const submitData = async () => {
    let result = await fetch('http://localhost:8000/users', {
        method:'post',
        body: JSON.stringify({
            username, email, password
        }),
        headers: {
            'Content-Type':'application/json'
        }
    });
    result = await result.json();
    console.log(result)
    localStorage.setItem('user', JSON.stringify(result))
};

    return (
        <div>
            <Navbar/>
            <div className='registrationPage'>
                <h2>Login</h2>
                <div className='formContainer'>
                    <input className='submissionInput' type='text' placeholder='Enter Username' onChange={(e) => {
                        setUsername(e.target.value)}} value={username}></input>
                    <input className='submissionInput' type='email' placeholder='Enter Email' onChange={(e) => {
                        setEmail(e.target.value)}} value={email}></input>
                    <input className='submissionInput' type='password' placeholder='Enter Password' onChange={(e) => {
                        setPassword(e.target.value)}} value={password}></input>
                    <button onClick={submitData} className='submissionButton' type='button'>Login</button>
                </div>
            </div>
        </div>
    )
};