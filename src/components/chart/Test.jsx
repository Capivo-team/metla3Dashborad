import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const VerticalBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [ 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  })

  return (
    <Stack
      alignItems={'center'}
      width={{ lg: '50vw',md:'45vw',sm:'60vw',xs:'100%' }}
      height={{ md: '30vw',sm:'30vw' }}

      mb={'20px'}
    >
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Sales Report',
            fontSize: 25,
          },
          legend: {
            display: false,
            position: 'bottom',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: false, // Set display to false to hide the label
                },
              },
            ],
          },
        }}
      />
    </Stack>
  )
}

export default VerticalBarChart
