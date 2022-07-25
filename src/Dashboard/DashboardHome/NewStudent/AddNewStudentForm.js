import React from 'react';

const AddNewStudentForm = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Add New Student</h1>
            <form className="login-form">
                <input type="file" placeholder="Enter Student Image" />
                <input type="text" placeholder="Enter Student Your Name" />
                <input type="date" placeholder="Enter Student DATE OF ADMIT" />
                <input type="text" placeholder="Enter Student NUMBER" />
                <input type="text" placeholder="Enter Student Fees Statues" />
                <input type="text" placeholder="Enter Student CLASS" />
                
                <button>ADD STUDENT</button>
            </form>
        </div>
    );
};

export default AddNewStudentForm;