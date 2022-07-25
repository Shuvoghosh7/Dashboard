import React from 'react';

const ShowTeacher = ({ teacher }) => {
    const { image, Name, Designation, Education, University_Name, Subject, Joining_Date, ID,Email,Number } = teacher
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image}/>
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl">{Name}</h2>
                <p className='font-bold'>{Designation}</p>
                <p className='font-medium'>{Education}</p>
                <p><span className='font-medium'>University:</span> {University_Name}</p>
                <p><span className='font-medium'>Subject:</span> {Subject}</p>
                <p><span className='font-medium'>Joining Date:</span> {Joining_Date}</p>
                <p><span className='font-medium'>Teacher ID: </span>{ID}</p>
                <p><span className='font-medium'>Email: </span> <span className='text-blue-900'>{Email}</span></p>
                <p><span className='font-medium'>Number:</span> {Number}</p>
            </div>
        </div>

    );
};

export default ShowTeacher;