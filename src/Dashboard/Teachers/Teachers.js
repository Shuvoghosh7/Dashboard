import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowTeacher from './ShowTeacher';
import { CgMathPlus } from 'react-icons/cg';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    console.log(teachers)
    useEffect(() => {
        fetch('/teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='mx-8 my-5'>
            <p className='my-5 text-2xl font-bold'>Teachers List</p>
            <div className='flex justify-between mb-5'>
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered rounded-3xl" />
                </div>
                <div>
                    <Link to='/dashboard/addTeacher' className='btn btn-primary ml-2'>Add Teacher <CgMathPlus className='text-xl ml-2' /></Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    teachers?.map((teacher) =>
                        <ShowTeacher
                            key={teacher._id}
                            teacher={teacher}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Teachers;