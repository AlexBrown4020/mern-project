import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';
import './lesson.css';

export const Lesson = () => {
  const param = useParams();
  const {data, loading, error} = useFetch(`/lessons/${param.id}`);
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth)
    if (auth === null) {
      alert('You must be logged in to see the lesson')
      navigate('/')
    }
});

  const deleteLesson = async (id) => {
    let lesson = await fetch(`http://localhost:3000/lessons/${id}`, {
      method: 'delete'
    });
    lesson = await lesson.json();
    if (lesson) {
      alert('Lesson deleted');
      navigate('/');
    }
  };

  const handleJoin = async (id) => {
    const username = JSON.parse(auth).username
    const prevParticipants = data.participants;
    let result = await fetch(`http://localhost:8000/lessons/${id}`)
    if (prevParticipants.includes(username)) {
      result = await fetch(`http://localhost:8000/lessons/${id}`, {
        method: 'put',
        body: JSON.stringify({
          participants: [...prevParticipants].filter(el => el !== username)
      }),
      headers: {
          'Content-Type':'application/json'
      }
      })
      alert('Left lesson');
      navigate('/')
    } else {
      result = await fetch(`http://localhost:8000/lessons/${id}`, {
        method: 'put',
        body: JSON.stringify({
          participants: [...prevParticipants, username]
      }),
      headers: {
          'Content-Type':'application/json'
      }
      })
      alert('Successfully joined lesson');
      navigate('/')
    }
    localStorage.setItem('lesson', JSON.stringify(result));
  }

  return (
    <div>
      <Navbar/>
      <div className='mainContainer'>
        <div className='lessonTitleContainer'>
          <h2 className='lessonTitle'>{data.title}</h2>
        </div>
      { loading ? (
        'Loading, please wait'
      ) : (
        <div key={data._id} className='lessonContainer' >
          <div className='lessonImg'>
            <img alt='default placehodler of group stretching' className='lessonImg' src='https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2014/12/gentle-yoga-class.jpeg?w=1080&ssl=1'></img>
          </div>
          <div className='lessonContent'>
              <div className='contentBlock'>
                  <p className='lessonText'>Day: </p> 
                  {
                    data.date === undefined ? <p>Loading date...</p> : <p>{data.date.slice(0,10)}</p>
                  }
              </div>
              <div className='contentBlock'>
                  <p className='lessonText'>Description: </p> 
                  <p>{data.description}</p>
              </div>
              <div className='contentBlock'>
                  <p className='lessonText'>Teacher: </p> 
                  <p>{data.creator}</p>
              </div>
          </div>
            { 
            JSON.parse(auth).isAdmin ?       
            <div className='lessonManipulate'>       
              <button className='lessonButton' onClick={()=>deleteLesson(data._id)}>Delete lesson</button>
              <Link className='lessonButton' to={`update`}> Update Lesson </Link> 
              <button onClick={() =>handleJoin(data._id, auth.username)} className='lessonButton'>Join lesson</button>
            </div>
            : 
            <div className='lessonManipulate'>
              <button onClick={() =>handleJoin(data._id, auth.username)} className='lessonButton'>Join lesson</button>
            </div>
            }
        </div>
      )}
      </div>
      <Footer />
    </div>
  )};