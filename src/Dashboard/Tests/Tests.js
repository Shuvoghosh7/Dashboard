import React from 'react';
import { Outlet } from 'react-router-dom';
import TestLink from './TestLink';

const Tests = () => {
    return (
        <div className='mx-8 mt-5'>
            <h1 className=''>My Task</h1>
            <div>
                <TestLink>
                    <Outlet></Outlet>
                </TestLink>
            </div>
        </div>
    );
};

export default Tests;