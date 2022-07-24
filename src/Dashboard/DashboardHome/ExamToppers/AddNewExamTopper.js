import React from 'react';

const AddNewExamTopper = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Add New Student</h1>
            <form className="login-form">
                <input type="email" placeholder="Enter Student Roll_No" />
                <input type="text" placeholder="Enter Student Your Name" />
                <input type="text" placeholder="Enter Student Department" />
                <button>ADD STUDENT</button>
            </form>
        </div>
    );
};

export default AddNewExamTopper;