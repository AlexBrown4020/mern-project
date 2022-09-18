import React from 'react';
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
                        return <div key={lesson._id} className='lessonContainer'>
                                <div className='lessonTitle'>
                                    <h3>{lesson.title}</h3>
                                </div>
                                <div className='lessonContent'>
                                    <p className='lessonText'>Date: {lesson.date.slice(0,10)}</p>
                                    <p className='lessonText'>Time: {lesson.date.slice(11,19)}</p>
                                    <p className='lessonText'>{lesson.description}</p>
                                </div>
                            </div>
                    })}
                </div>
                )}
        </div>
    )
};
