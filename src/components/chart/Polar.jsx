import { Stack } from '@mui/material';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart = () => {

  const data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }
    ]
  };

  const options = {
    title:{
      display:true,
      text:'Polar Area Chart',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right'
    }
  };

  return (
    <Stack maxWidth={'500px'}>
      <PolarArea data={data} options={options} />
    </Stack>
  );
}

export default PolarAreaChart;
