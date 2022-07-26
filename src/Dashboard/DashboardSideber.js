import React from 'react';
import { Link} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import {FaMoneyCheckAlt } from 'react-icons/fa';
const DashboardSideber = ({ children }) => {
    return (
        <div class="drawer drawer-mobile bg-base-200">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-[#5433FF] text-base-content">
                    <h1 className='mb-4 text-center text-white font-bold text-2xl'>Acadomi</h1>
                    {/*   Sidebar content here */}
                    <li className='bg-white rounded-3xl w-52'>
                        <Link className='bg-transparent text-[#5433FF]' to='/dashboard'> <AiFillHome/>DESHBOARD</Link>
                    </li>
                    <li><Link className='bg-transparent text-white' to="/dashboard/student"><BsFillPersonFill/> Students</Link></li>
                    <li>
                        <Link className='bg-transparent text-white' to="/dashboard/teacher"><BsFillPersonFill/>Teachers</Link>
                    </li>
                    
                    <li>
                        <Link className='bg-transparent text-white' to="/dashboard/finance"><FaMoneyCheckAlt/>Finance</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;