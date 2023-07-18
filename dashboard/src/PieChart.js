import React from 'react'
import Chart  from 'chart.js/auto';
import {Pie} from 'react-chartjs-2';

const labels = ["January","Feburary","March","April","May","June"];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Monthly Expenses",
            //backgroundColor: "rgb(255,99,132)",
            //borderColor: "rgb(25,99,132)",
            data: [10,45,2,20,30,5],

        },
    ],
};

function PieChart() {
  return (
    <div className='bg-white border border-secondary'>
        <Pie data={data}></Pie>

    </div>
    
  )
}

export default PieChart