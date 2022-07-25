import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
const ShowNewStudentData = ({newStudent,index}) => {
    const{image,Name,Date_Of_Admit,Number,Fees,Class}=newStudent
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>{Name}</td>
            <td>{Date_Of_Admit}</td>
            <td>{Number}</td>
            <td>{Fees}</td>
            <td>{Class}</td>
            <td>
                <button className='text-xl text-green-600 mr-3'><MdModeEditOutline /></button>
                <button className='text-xl text-red-600'><AiTwotoneDelete /></button>

            </td>

        </tr>
    );
};

export default ShowNewStudentData;