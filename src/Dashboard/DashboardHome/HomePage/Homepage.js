import React from 'react';
import Card from '../Card/Card';

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
            <div>
                
            </div>
        </div>
    );
};

export default Homepage;