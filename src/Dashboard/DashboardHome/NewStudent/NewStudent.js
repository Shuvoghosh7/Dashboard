import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMathPlus } from 'react-icons/cg';
import ShowNewStudentData from './ShowNewStudentData';
const NewStudent = () => {
    const [newStudents, setNewStudents] = useState([])
    console.log(newStudents)
    useEffect(() => {
        fetch('newStudent.json')
            .then(res => res.json())
            .then(data => setNewStudents(data))
    }, [])
    return (
        <div>
            <p className='my-5 text-2xl font-bold'>New Students List</p>
            <div>
                <Link to='/dashboard/addExamTopper' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
            </div>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date Of Admit</th>
                        <th>Number</th>
                        <th>Fees</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newStudents?.map((newStudent, index) =>
                            <ShowNewStudentData
                                key={newStudent._id}
                                newStudent={newStudent}
                                index={index}
                            />
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default NewStudent;