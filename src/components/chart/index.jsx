import { useState } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import { UserData } from './Data'
import { Stack } from '@mui/material'

function Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          '#F0A04B',
          '#E1EEDD',
          '#FEFBE9',
          '#2F0F5D',
          '#183A1D',
        ],
        borderColor: '#6c8f8f94',
        borderWidth: 1,
      },
    ],
  })

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <Stack
      justifyContent={'space-between'}
      direction={'row'}
      flexWrap={'wrap'}
      className="App"
    >
      <div style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 500 }}>
        <LineChart chartData={userData} />
      </div>{' '}
      <div style={{ width: 250 }}>
        <PieChart chartData={userData} />
      </div>
    </Stack>
  )
}

export default Chart
