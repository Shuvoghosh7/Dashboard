import React, { useState } from 'react';
import { Link} from "react-router-dom";
import ShowSportStudentData from './ShowSportStudentData';
import { CgMathPlus } from 'react-icons/cg';
import './SportStudent.css'
const SportStudent = () => {
    const [sporStudents, setSporStudents] = useState([])
    console.log(sporStudents)
    fetch('SportStudent.json')
        .then(res => res.json())
        .then(data => setSporStudents(data))
    return (
        <div className='students'>
            <div class="overflow-x-auto Sport_Student">
                <p className='text-2xl font-bold mt-3 mb-5 ml-2'>Sport Student List</p>
                <Link to='/dashboard/newSportStudent' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2'/></Link>
                <table class="table table-zebra w-full">
                    <thead  >
                        <tr>
                            <th></th>
                            <th>Roll_No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>JoingDate</th>
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
            <div>
                <h1>Tropper Students</h1>
            </div>
        </div>
    );
};

export default SportStudent;