import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../navbar/Navbar';
import './createLesson.css';

export const CreateLesson = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (!JSON.parse(auth).isAdmin) {
            navigate('/')
        }
    });

    const submitData = async () => {
        let result = await fetch('http://localhost:8000/lessons', {
            method:'post',
            body: JSON.stringify({
                title, date, description
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/');
    };

    return (
        <div>
            <Navbar />
            <div className='formContainer'>
                <h2>Create a lesson</h2>
                <input className='submissionInput' type='text' placeholder='Lesson title' 
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input className='submissionInput' type='date' placeholder='Enter date' 
                        value={date} onChange={(e) => setDate(e.target.value)}/>
                    <input className='submissionInput' type='text' placeholder='Enter email' 
                        value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button onClick={submitData} className='submissionButton' type='button'>Submit</button>
            </div>
        </div>

    )
}