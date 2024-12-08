import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
      labels: data.expenses, //setting expenses as x-axis
      datasets: [
        {
          label: 'Expenses and Profits', //adding label
          data: data.profits, //setting profits as y-axis
          //styling
          backgroundColor: 'rgba(12, 76, 2, 1)',
          borderColor: 'rgba(9, 55, 2, 1)',
          borderWidth: 0.5,
          hoverBackgroundColor: 'rgba(97, 143, 90, 1)', //styling for interaction
          hoverBorderColor: 'rgba(61, 94, 56, 1)', //styling for interaction
        },
      ],
    };


    const scatterChartOptions = {
        scales: {
          x: {ticks: {color: 'rgba(9, 55, 2, 1)'}}, //styling the labels
          y: {
            beginAtZero: false,
            ticks: {stepsize: 50, color: 'rgba(9, 55, 2, 1)'}
          },
        }
      };

      return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
    };


export default ScatterChart;