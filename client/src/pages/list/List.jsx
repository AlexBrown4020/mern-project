import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading, error} = useFetch('/lessons');

    return (
        <div>
            <div className='mainBanner'>
                <div className='bannerDescription'>
                    <h2 className='bannerTitle' >Welcome to Life in Balance!</h2>
                    <p className='bannerContent' >Looking for a class in Yoga? body balance? Tai-chi? Pilates? With over 400 registered teachers on our platform, you can find any class you like!</p>
                    <p className='bannerContent'>Have a look at our list of classes below, join up, and look out for the session details in your email</p>
                </div>
                <img className='bannerImg' src='https://media.self.com/photos/587e8bc713e257b344659432/master/w_960,c_limit/sky-ting-yoga-downward-dog-pose.jpg'/>
            </div>
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
                            <Link className='lessonTitle' to={`/lessons/${lesson._id}`} >
                                {lesson.title}
                            </Link>
                            <div className='lessonContent'>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Date: </p> 
                                    <p>{lesson.date.slice(0,10)}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Teacher: </p> 
                                    <p>{lesson.creator}</p>
                                </div>
                                <div className='contentBlock'>
                                    <p className='lessonText'>Paticipants: </p> 
                                    {lesson.participants.map(el => {
                                        return <p key={el} >{el}</p>
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
