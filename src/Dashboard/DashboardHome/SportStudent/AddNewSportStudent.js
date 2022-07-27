import React from 'react';
import './AddNewSportStudent.css'
const AddNewSportStudent = () => {
    return (
        <div className='login-container'>
            <h1 className='login-title'>Add Sport Student</h1>
            <form className="login-form">
                <input type="email" placeholder="Enter Student Roll_No" />
                <input type="text" placeholder="Enter Student Your Name" />
                <input type="email" placeholder="Enter Student Email" />
                <input type="text" placeholder="Enter Student Department" />
                <input type="date" placeholder="Enter Student Joing Date" />
                <button>ADD STUDENT</button>
            </form>
        </div>
    );
};

export default AddNewSportStudent;