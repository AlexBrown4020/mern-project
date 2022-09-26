import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navbar } from '../navbar/Navbar';
import '../registration/registration.css'
import { Footer } from '../footer/Footer';

export const CreateLesson = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    let creator = JSON.parse(user);
    creator = creator.username;

    useEffect(() => {
        if (!JSON.parse(user).isAdmin) {
            navigate('/')
        }
    });

    const submitData = async () => {
        let result = await fetch('http://localhost:8000/lessons', {
            method:'post',
            body: JSON.stringify({
                title, date, description, creator
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        
        if (result.success === false) {
            alert('Title and date are required');
        } else {
            localStorage.setItem('lesson', JSON.stringify(result));
            console.log(result)
            navigate('/');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='registrationPage'>
                <div className='formContainer'>
                    <h2>Create a lesson</h2>
                    <input className='submissionInput' type='text' placeholder='Lesson title' 
                            value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input className='submissionInput' type='date' placeholder='Enter date' 
                            value={date} onChange={(e) => setDate(e.target.value)}/>
                        <input className='submissionInput' type='text' placeholder='Enter description' 
                            value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button onClick={submitData} className='submissionButton' type='button'>Submit</button>
                </div>
            </div>
            <Footer />
        </div>

    )
}