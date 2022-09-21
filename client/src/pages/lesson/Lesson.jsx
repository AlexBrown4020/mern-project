import React from 'react'
import { useParams } from 'react-router-dom';

import { Navbar } from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';
import '../list/list.css';
import './lesson.css';

export const Lesson = () => {
  const param = useParams();
  const {data, loading, error} = useFetch(`/lessons/${param.id}`);
  const auth = localStorage.getItem('user');

  return (
    <div>
      <Navbar/>
      <div className='mainContainer'>
      { loading ? (
        'Loading, please wait'
      ) : (
        <div key={data._id} className='lessonContainer' >
          <div >
              <img alt='default placehodler of group stretching' className='lessonImg' src='https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?w=1080&ssl=1'></img>
          </div>
          <h2>{data.title}</h2>
          <div className='lessonContent'>
              <div className='contentBlock'>
                  <p className='lessonText'>Day: </p> 
                  {
                    data.date === undefined ? <p>Loading date...</p> : <p>{data.date.slice(0,10)}</p>
                  }
              </div>
              <div className='contentBlock'>
                  <p className='lessonText'>Time: </p> 
                  {
                    data.date === undefined ? <p>Loading date...</p> : <p>{data.date.slice(11,19)}</p>
                  }
              </div>
              <div className='contentBlock'>
                  <p className='lessonText'>Description: </p> 
                  <p>{data.description}</p>
              </div>
          </div>
        </div>
      )}
      { 
        auth && JSON.parse(auth).isAdmin ?       
          <div className='lessonManipulate'>       
            <button className='lessonButton'>Delete lesson</button>
            <button className='lessonButton'>Edit lesson</button>
            <button className='lessonButton'>Join lesson</button>
          </div>
          : <button className='lessonButton'>Join lesson</button>

      }
      </div>
    </div>
  )};
