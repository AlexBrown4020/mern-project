import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

const submitData = async () => {
    let result = await fetch('http://localhost:8000/auth/login', {
        method:'post',
        body: JSON.stringify({
            username, email, password
        }),
        headers: {
            'Content-Type':'application/json'
        }
    });
    result = await result.json();
    if (result.username){
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/');
    } else {
        alert("Please enter correct details.")
    }

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