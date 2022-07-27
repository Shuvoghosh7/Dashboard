import React, { useEffect, useState } from 'react';
import './UnpaidStudent.css'
import { CgMathPlus } from 'react-icons/cg';
import { Link } from "react-router-dom";
import ShowUnpaidStudentData from './ShowUnpaidStudentData';
import SchoolExpense from '../SchoolExpense/SchoolExpense';
const UnpaidStudent = () => {
    const [unpaidStudents, setUnpaidStudents] = useState([])
    useEffect(() => {
        fetch('/unpaidStudent.json')
            .then(res => res.json())
            .then(data => setUnpaidStudents(data))
    }, [])
    return (
        <div className='Unpaid_Expense mt-6 grid lg:grid-cols-2 md:grid-cols-1  grid-cols-1 gap-6'>
            <div class="overflow-x-auto unpaid_Student">
                <p className='text-2xl font-bold mt-3 mb-5 ml-2'>Unpaid Student List</p>
                <Link to='/dashboard/addUnpadeStudent' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
                <table class="table table-zebra w-full">
                    <thead  >
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Roll_No</th>
                            <th>Class</th>
                            <th>Blance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           unpaidStudents?.map((unpaidStudent, index) =>
                                <ShowUnpaidStudentData
                                    key={UnpaidStudent._id}
                                    unpaidStudent={unpaidStudent}
                                    index={index}
                                />
                            )
                        }

                    </tbody>
                </table>

            </div>
            {/* School Expense */}
            <div>
                <SchoolExpense/>
            </div>

        </div>
    );
};

export default UnpaidStudent;