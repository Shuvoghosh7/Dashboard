import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
const ShowSchoolExpenseData = ({expense,index}) => {
    const{Date,Purpose,Amount}=expense
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{Date}</td>
            <td>{Purpose}</td>
            <td><span>$</span>{Amount}</td>
            <td>
                <button className='text-xl text-green-600 mr-3'><MdModeEditOutline /></button>
                <button className='text-xl text-red-600'><AiTwotoneDelete /></button>

            </td>

        </tr>
    );
};

export default ShowSchoolExpenseData;