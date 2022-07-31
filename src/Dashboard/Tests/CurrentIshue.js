import React, { useEffect, useState } from 'react';
import CurrentIshueDetails from './CurrentIshueDetails';

const CurrentIshue = () => {
    const [examToppers, setExamToppers] = useState([])
    console.log(examToppers)
    useEffect(()=>{
        fetch('/ExamToppers.json')
        .then(res => res.json())
        .then(data => setExamToppers(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                examToppers?.map((sportStudent, index) =>
                    <CurrentIshueDetails
                        key={sportStudent._id}
                        sportStudent={sportStudent}
                        index={index}
                    />
                )
            }
        </div>
    );
};

export default CurrentIshue;