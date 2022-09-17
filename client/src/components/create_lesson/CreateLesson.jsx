import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CreateLesson = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (!JSON.parse(auth).isAdmin) {
            navigate('/')
        }
    });


    return (
        <div>
            <Navbar />
            <h2>Create a lesson</h2>
        </div>

    )
}