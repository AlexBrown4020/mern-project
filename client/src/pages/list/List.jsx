import React from 'react';
import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading, error} = useFetch('/lessons');

    
    return (
        <div>
            <h1>Lessons</h1>
            {loading ? (
                'Loading, please wait.'
                ) : (
                <div className='lessonList'>
                    {data.map(lesson => {
                        return <div key={lesson._id} className='lessonContainer'>
                                <div className='lessonTitle'>
                                    <h2>{lesson.title}</h2>
                                </div>
                                <div className='lessonContent'>
                                    <p>Date: {lesson.date.slice(0,10)}</p>
                                    <p>Time: {lesson.date.slice(11,19)}</p>
                                    <p>{lesson.description}</p>
                                </div>
                            </div>
                    })}
                </div>
                )}
        </div>
    )
};
