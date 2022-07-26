import React from 'react';
import BalanceAnalytics from './BalanceAnalytics/BalanceAnalytics';
import BlanceCard from './BlanceCard/BlanceCard';
import UnpaidStudent from './UnpaidStudent/UnpaidStudent';

const Finance = () => {
    return (
        <div className='mx-8 mb-5'>
            <div>
                <BlanceCard/>
            </div>
            <div>
                <BalanceAnalytics />
            </div>
            <div>
                <UnpaidStudent/>
            </div>
        </div>
    );
};

export default Finance;