import { Stack } from '@mui/material';
import React from 'react';
import { Bubble } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: 20, y: 30, r: 5 },
        { x: 40, y: 10, r: 10 },
        { x: 30, y: 22, r: 15 },
        { x: 10, y: 50, r: 13 },
        { x: 25, y: 34, r: 14 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)'
    },
    {
      label: 'Dataset 2',
      data: [
        { x: 10, y: 20, r: 10 },
        { x: 30, y: 30, r: 20 },
        { x: 50, y: 10, r: 15 },
        { x: 15, y: 45, r: 18 },
        { x: 35, y: 25, r: 25 },
        { x: 20, y: 30, r: 20 },

      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)'
    }
  ]
};

const BubbleChart = () => {
  return (
    <Stack alignItems={'center'} width={{sm:'600px',xs:'350px'}}height={{sm:'600px',xs:'172px'}} maxHeight={'250px !important'} maxWidth={'600px !important'}>
      <Bubble data={data} />
    </Stack>
  );
}

export default BubbleChart;
