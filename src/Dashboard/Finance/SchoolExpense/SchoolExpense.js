import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMathPlus } from 'react-icons/cg';
import ShowSchoolExpenseData from './ShowSchoolExpenseData';
const SchoolExpense = () => {
    const [expenses, setExpenses] = useState([])
    console.log(expenses)
    useEffect(() => {
        fetch('/schoolExpense.json')
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [])
    return (
        <div class="overflow-x-auto school_expense">
            <p className='text-2xl font-bold mt-3 mb-5 ml-2'>School Expense</p>
            <Link to='/dashboard/addUnpadeStudent' className='btn btn-primary ml-2'>Add New <CgMathPlus className='text-xl ml-2' /></Link>
            <table class="table table-zebra w-full">
                <thead  >
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th className='text-center'>Purpose</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses?.map((expense, index) =>
                            <ShowSchoolExpenseData
                                key={expense._id}
                                expense={expense}
                                index={index}
                            />
                        )
                    }


                </tbody>
            </table>

        </div>
    );
};

export default SchoolExpense;