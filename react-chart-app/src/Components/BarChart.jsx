import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months, //setting months as x-axis
      datasets: [
        {
          label: 'Monthly Sales', //adding label
          data: data.sales, //sale as y-axis
          //styling for interactions
          backgroundColor: 'rgba(173, 160, 171, 1)',
          borderColor: 'rgba(173, 160, 171, 1)',
          borderWidth: 0.5,
          hoverBackgroundColor: 'rgba(88, 58, 82, 1)',
          hoverBorderColor: 'rgba(58, 39, 54, 1)',
        },
      ],
    };


    const barChartOptions = {
        scales: {
          x: {ticks: {color: 'rgba(52, 6, 0, 1)'}}, //changing label color
          y: {
            beginAtZero: true,
            ticks: {stepsize: 50, color: 'rgba(52, 6, 0, 1)'} //changing label color
          },
        },
      };

      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };


export default BarChart;