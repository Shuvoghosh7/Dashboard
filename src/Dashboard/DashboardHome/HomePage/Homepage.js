import React from 'react';
import Card from '../Card/Card';
import NewStudent from '../NewStudent/NewStudent';

import SchoolPerformance from '../SchoolPerformance/SchoolPerformance';
import SportStudent from '../SportStudent/SportStudent';

const Homepage = () => {
    return (
        <div className='my-8 mx-6'>
            <p className='text-2xl'>Dashboard</p>
            <div className='mt-5'>
                <Card />
            </div>
            <div className='mt-6 text-2xl'>
                <SchoolPerformance/>
            </div>
            <div className='mt-6'>
                <SportStudent/>
            </div>
            <div className='lg:mt-6 mt-12'>
                <NewStudent/>
            </div>
        </div>
    );
};

export default Homepage;