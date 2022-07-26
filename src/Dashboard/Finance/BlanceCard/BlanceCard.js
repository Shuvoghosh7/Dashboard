import React from 'react';
import './BlanceCard.css'
import { FcMoneyTransfer } from 'react-icons/fc';
const BlanceCard = () => {
    return (
        <div className='Blance_Card mx-8 mt-5 mb-8 lg:flex justify-between items-center'>
            <div className='flex items-center'>
                <div >
                    <FcMoneyTransfer className='money-icon'/>
                </div>
                <div>
                    <p className='text-2xl font-bold'><span className='text-2xl font-bold'>$</span>982,445.67</p>
                    <p className='text-xl font-medium mt-2' >Current Balance</p>
                </div>
            </div>
            <div>
                <p className='text-3xl font-bold'>Average from last month</p>
                <p className='text-xl font-medium mt-2'>23% then Last Month</p>
            </div>
        </div>
    );
};

export default BlanceCard;