import React from 'react';
import Card from '../Card/Card';
import SchoolPerformance from '../SchoolPerformance/SchoolPerformance';

const Homepage = () => {
    return (
        <div className='m-8'>
            <p className='text-2xl'>Dashboard</p>
            <div className='mt-5'>
                <Card />
            </div>
            <div className='mt-6 text-2xl'>
                <SchoolPerformance/>
            </div>
        </div>
    );
};

export default Homepage;