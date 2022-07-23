import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const DashboardSideber = ( {children}) => {
    return (
        <div class="drawer drawer-mobile bg-base-200">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-44 bg-blue-600 text-base-content">
                <h1 className='mb-6'>Acadomi</h1>
                    {/*   Sidebar content here */}
                        <li><Link className='bg-transparent text-white' to="/dashboard/student">Students</Link></li>
                        <li>
                            <Link className='bg-transparent text-white' to="/dashboard/teacher">Teachers</Link>
                        </li>
                        <li>
                            <Link className='bg-transparent text-white' to="/dashboard/course">Total Course</Link>
                        </li>
                        <li>
                            <Link className='bg-transparent text-white' to="/dashboard/events">Events</Link>
                        </li>
                        <li>
                            <Link className='bg-transparent text-white' to="/dashboard/finance">Finance</Link>
                        </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;