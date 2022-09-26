import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading, error} = useFetch('/lessons');

    return (
        <div>
            <div className='mainTitleContainer'>
                <h2 className='mainTitle'>Upcoming Lessons</h2>
            </div>
            {loading ? (
                'Loading, please wait.'
                ) : (
                <div className='lessonList'>
                    {data.map(lesson => {
                        return <div key={lesson._id} className='lessonContainer' >
                            <div >
                                <img alt='default placehodler of group stretching' className='lessonImg' src='https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?w=1080&ssl=1'></img>
                            </div>
                            <Link to={`/lessons/${lesson._id}`} >
                                {lesson.title}
                            </Link>
                            <div className='lessonContent'>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Date: </p> 
                                    <p>{lesson.date.slice(0,10)}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Time:</p> 
                                    <p>{lesson.date.slice(11,19)}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Description: </p> 
                                    <p>{lesson.description}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Teacher: </p> 
                                    <p>{lesson.creator}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Paticipants: </p> 
                                    {lesson.participants.map(el => {
                                        return <p>{el}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                )}
        </div>
    )
};
