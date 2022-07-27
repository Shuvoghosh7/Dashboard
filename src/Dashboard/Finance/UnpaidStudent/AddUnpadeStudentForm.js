import React from 'react';

const AddUnpadeStudentForm = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Add Unpade Student</h1>
            <form className="login-form">
                <input type="file" placeholder="Enter Student Image" />
                <input type="text" placeholder="Enter Student Student Name" />
                <input type="text" placeholder="Enter Student Student Roll No" />
                <input type="text" placeholder="Enter Student CLASS" />
                <input type="text" placeholder="Enter Student unpade balance" />
                <button>ADD UNPADE STUDENT</button>
            </form>
        </div>
    );
};

export default AddUnpadeStudentForm;