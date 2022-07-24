import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
const ShowSportStudentData = ({ sportStudent, index }) => {
    const { Roll_No, Name, Email, Department, JoingDate } = sportStudent
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Roll_No}</td>
            <td className='text-[#E91E63] font-bold'>{Name}</td>
            <td>{Email}</td>
            <td>{Department}</td>
            <td>{JoingDate}</td>
            <td>
                <button className='text-xl text-green-600 mr-3'><MdModeEditOutline /></button>
                <button className='text-xl text-red-600'><AiTwotoneDelete /></button>

            </td>

        </tr>
    );
};

export default ShowSportStudentData;