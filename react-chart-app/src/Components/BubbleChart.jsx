import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      datasets: [
        {
          label: 'Sales vs Expenses and Profits', //adding label
          data: data.expenses.map((expense, index) => ({ //using map to set data for each record
            x: expense, //set x-axis as expense
            y: data.profits[index], //set y-axis as profits
            r: data.sales[index]/10 //set bubble size as sales
          })),
         //styling
         backgroundColor: 'rgba(122, 92, 57, 0.79)',
         borderColor: 'rgba(119, 65, 3, 0.79)',
         borderWidth: 0.5,
         hoverBackgroundColor: 'rgba(249, 175, 89, 0.79)', //styling for interaction
         hoverBorderColor: 'rgba(250, 156, 47, 0.79)', //styling for interaction
        },
      ],
    };


    const bubbleChartOptions = {
        scales: {
          x: {ticks: {color: 'rgba(55, 31, 3, 0.79)'}},
          y: {
            beginAtZero: false,
            ticks: {color: 'rgba(55, 31, 3, 0.79)'}
          },
        },
      };

      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };


export default BubbleChart;