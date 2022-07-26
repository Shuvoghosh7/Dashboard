import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
const ShowStudentsData = ({ student, index }) => {
    const { image, Name, Roll_No, Date, Parent_Name, Number, Class, Grade } = student
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>{Name}</td>
            <td>{Roll_No}</td>
            <td>{Date}</td>
            <td>{Parent_Name}</td>
            <td>{Number}</td>
            <td>{Class}</td>
            <td>{Grade}</td>
            <td>
                <button className='text-xl text-green-600 mr-3'><MdModeEditOutline /></button>
                <button className='text-xl text-red-600'><AiTwotoneDelete /></button>

            </td>

        </tr>
    );
};

export default ShowStudentsData;