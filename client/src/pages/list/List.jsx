import React from 'react';
import useFetch from '../../hooks/useFetch';
import './list.css';

export const List = () => {
    const {data, loading, error} = useFetch('/lessons');
    console.log(data)
    
    return (
        <div>
            {loading ? (
                'Loading, please wait.'
                ) : (
                <div>
                    {data.map(lesson => {
                        return <div className='lessonContainer'>
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
