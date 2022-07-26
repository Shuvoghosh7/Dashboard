import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './BalanceAnalytics.css'
const BalanceAnalytics = () => {
    const [finaceData, setfinaceData] = useState({

        series: [{
            name: 'Income',
            data: [76, 85, 101, 50, 87, 105, 91, 114, 94]
        }, {
            name: 'Expensee',
            data: [60, 60, 90, 70, 61, 80, 63, 60, 106]
        },],
        options: {
            colors: ['#E91E63', '#FF9800'],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    })
    return (
        <div className='Balance_Analytics'>
            <h1 className='ml-5 text-2xl font-bold'>School Balance Analytics</h1>
            <Chart
                options={finaceData.options}
                series={finaceData.series}
                type="bar"
                height={450}
            />
        </div>
    );
};

export default BalanceAnalytics;