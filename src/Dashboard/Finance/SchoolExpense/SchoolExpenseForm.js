import React from 'react';

const SchoolExpenseForm = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Add School Expense</h1>
            <form className="login-form">
                <input type="date" placeholder="Enter Expance Date" />
                <input type="text" placeholder="Enter School Expense Purpose" />
                <input type="text" placeholder="Enter School Expense balance"/>
                <button>Add School Expense</button>
            </form>
        </div>
    );
};

export default SchoolExpenseForm;