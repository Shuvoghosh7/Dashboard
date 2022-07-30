import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TestLink = ({ children }) => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar">
                    {/* <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> */}
    
                    <div class="flex-none">
                    <div class="avatar mb-8">
                                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                        <ul class="menu menu-horizontal text-sm ml-18">
                            <li><Link className="focus:text-red-600 focus:text-decoration:underline  bg-transparent" to="/dashboard/tests/Personal">Add Ishue</Link></li>
                            <li><Link className="focus:text-red-600  bg-transparent" to="/dashboard/tests/currentIshue">Current Ishue</Link></li>

                        </ul>
                    </div>
                </div>

                {children}
            </div>
            {/* <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-56 bg-base-100">

                <li><NavLink className="rounded-lg" to="tests/Personal">Personal details</NavLink></li>
            </ul>

        </div> */}
        </div>
    );
};

export default TestLink;