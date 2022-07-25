import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMathPlus } from 'react-icons/cg';
import ShowStudentsData from './ShowStudentsData';
const Students = () => {
    const[students,setStudents]=useState([])
    console.log(students)
    useEffect(()=>{
        fetch('/studentsList.json')
        .then(res =>res.json())
        .then(data =>setStudents(data))
    },[])
    return (
        <div className='mx-8'>
            <p className='my-5 text-2xl font-bold'>Students List</p>
            <div className='flex justify-between mb-5'>
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered rounded-3xl" />
                </div>
                <div>
                    <Link to='/dashboard/addStudent' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
                </div>
            </div>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Roll_No</th>
                        <th>Date</th>
                        <th>Parent_Name</th>
                        <th>Number</th>
                        <th>Class</th>
                        <th>Grade</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((student, index) =>
                            <ShowStudentsData
                                key={student._id}
                                student={student}
                                index={index}
                            />
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Students;