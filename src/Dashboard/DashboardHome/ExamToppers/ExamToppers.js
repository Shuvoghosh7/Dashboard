import React from 'react';

const ExamToppers = ({examTopper,index}) => {
    const { Roll_No, Name,  Department} = examTopper
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Roll_No}</td>
            <td className='text-[#E91E63] font-bold'>{Name}</td>
            <td>{Department}</td>
        </tr>
    );
};

export default ExamToppers;