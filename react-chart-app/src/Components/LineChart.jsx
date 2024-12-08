import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months, //setting months as x-axis
      datasets: [
        {
          label: 'Monthly Profits', //setting label
          data: data.profits,//setting profits as y-axis
          backgroundColor: 'rgba(27, 2, 66, 1)',
          borderColor: 'rgba(27, 2, 66, 1)',
          borderWidth: 0.5,
          hoverBackgroundColor: 'rgba(144, 81, 243, 1)', //styling for interaction
          hoverBorderColor: 'rgba(144, 81, 243, 1)', //styling for interaction
        },
      ],
    };


    const lineChartOptions = {
        scales: {
          x: {ticks: {color: 'rgba(27, 2, 66, 1)'}}, //styling the label
          y: {
            beginAtZero: false,
            ticks: {color: 'rgba(27, 2, 66, 1)'} //styling the label
          },
        },
      };

      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };


export default LineChart;