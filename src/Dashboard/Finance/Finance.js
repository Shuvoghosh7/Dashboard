import React from 'react';
import BalanceAnalytics from './BalanceAnalytics/BalanceAnalytics';
import BlanceCard from './BlanceCard/BlanceCard';

const Finance = () => {
    return (
        <div>
            <div>
                <BlanceCard/>
            </div>
            <div>
                <BalanceAnalytics />
            </div>
        </div>
    );
};

export default Finance;