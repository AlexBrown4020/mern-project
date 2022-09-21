import React from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';

export const Lesson = () => {
  const param = useParams();
  const {data, loading, error} = useFetch(`/lessons/${param.id}`);

  return (
    <div>
      <Navbar/>
      { loading ? (
        'Loading, please wait'
      ) : (
        <div key={data._id} className='lessonContainer' >
        <div >
            <img alt='default placehodler of group stretching' className='lessonImg' src='https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?w=1080&ssl=1'></img>
        </div>
        <h2>
            {data.title}
        </h2>
        <div className='lessonContent'>
            <div className='contentBlock'>
                <p className='lessonText'>When: </p> 
                <p>{data.date}</p>
            </div>
            <div className='contentBlock'>
                <p className='lessonText'>Description: </p> 
                <p>{data.description}</p>
            </div>
        </div>
      </div>
      )}

    </div>
  )};