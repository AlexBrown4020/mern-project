import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import { List } from '../list/List';

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='listContainer'>
                <List />
            </div>
            <Footer/>
        </div>
    )
};
