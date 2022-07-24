import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import './SchoolPerformance.css'
const SchoolPerformance = () => {
    const [state, setState] = useState({
        options: {
            colors:[ '#E91E63', '#FF9800'],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    })

    const [data, setData] = useState({
        options: {
            colors:[ '#E91E63', '#FF9800'],
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [10, 20, 30, 40, 60, 100,120,130]
            }
        },
        series: [
            {
                name: "series-1",
                data: [3, 4, 5, 9, 10, 12, 15, 16]
            }
        ]
    })
    return (
        <div className='Performance'>
            <div className='School_Performance'>
                <h1 className='ml-5'>School Performance</h1>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={450}
                />
            </div>
            <div className='Student_Performance'>
                <h1 className='text-center'>Student Performance</h1>
                <div className='flex justify-around mt-5'>
                    <div>
                        <p className='text-lg'>Overall Growth</p>
                        <p className='text-sm font-bold'>70%</p>
                    </div>
                    <div>
                        <p className='text-lg'>Montly</p>
                        <p className='text-sm font-bold'>50%</p>
                    </div>
                </div>
                <div className='ml-8 mt-3'>
                    <p className='text-lg'>Day</p>
                    <p className='text-sm font-bold'>10.50%</p>
                </div>

                <div>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="bar"
                        height={320}
                    />
                </div>
            </div>
        </div>
    );
};

export default SchoolPerformance;