import { Stack } from '@mui/material'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Stack
    justifyContent={'center'}
    alignItems={'center'}
 
      width={{ lg: '24vw',md:'55vw',sm:'60vw' }}
      height={{ md: '30vw',sm:'50vw' }}  
      mb={'30px'}
        >
      <Doughnut data={data} />
    </Stack>
  )
}

export default DoughnutChart
