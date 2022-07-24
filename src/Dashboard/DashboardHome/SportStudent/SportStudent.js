import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ShowSportStudentData from './ShowSportStudentData';
import { CgMathPlus } from 'react-icons/cg';
import './SportStudent.css'
import ExamToppers from '../ExamToppers/ExamToppers';
const SportStudent = () => {
    const [sporStudents, setSporStudents] = useState([])
    fetch('SportStudent.json')
        .then(res => res.json())
        .then(data => setSporStudents(data))

    const [examToppers, setExamToppers] = useState([])
    fetch('ExamToppers.json')
        .then(res => res.json())
        .then(data => setExamToppers(data))
    return (
        <div className='students'>
            <div class="overflow-x-auto Sport_Student">
                <p className='text-2xl font-bold mt-3 mb-5 ml-2'>Sport Student List</p>
                <Link to='/dashboard/newSportStudent' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
                <table class="table table-zebra w-full">
                    <thead  >
                        <tr>
                            <th></th>
                            <th>Roll_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Joining_Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sporStudents?.map((sportStudent, index) =>
                                <ShowSportStudentData
                                    key={sportStudent._id}
                                    sportStudent={sportStudent}
                                    index={index}
                                />
                            )
                        }

                    </tbody>
                </table>

            </div>
            <div className='Exam_Toppers'>
                <h1 className='text-2xl font-bold mt-3 mb-5 ml-2'>Exam Toppers</h1>
                <Link to='/dashboard/addExamTopper' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
                <table class="table table-zebra w-full">
                    <thead  >
                        <tr>
                            <th></th>
                            <th>Roll_No</th>
                            <th>Name</th>
                            <th>Department</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            examToppers?.map((examTopper, index) =>
                                <ExamToppers
                                    key={examTopper._id}
                                    examTopper={examTopper}
                                    index={index}
                                />
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SportStudent;