import React from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { List } from '../list/List';

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='lisContainer'>
                <List />
            </div>
        </div>
    )
};
