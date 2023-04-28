import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'
import HeaderCards from './HeaderCards'
import InsightsIcon from '@mui/icons-material/Insights'
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart'
import TableChartIcon from '@mui/icons-material/TableChart'
function Cards() {
  const cards = [
    {
      background: '#ffe8ef',
      name: 'Comain',
      icon: <InsightsIcon sx={{ fontSize: '40px', color: ' #ec6a85' }} />,
      number: '12534',
      hardNum: '35.501%',
      color:'#ec6a85'

    },
    {
      background: '#dad7f4',
      name: 'People',
      number: '12534',
      icon: (
        <PivotTableChartIcon sx={{ fontSize: '40px', color: ' #8b5aea' }} />
      ),
      hardNum: '45.501%',
      color:'#8b5aea'

    },
    {
      background: '#fff3d4',
      name: 'Company',
      number: '12534',
      icon: <TableChartIcon sx={{ fontSize: '40px', color: '#ffd056' }} />,
      hardNum: '60.501%',
      color:'#ffd056'
    },
  ]
  return (
    <Stack
      sx={{
        background: 'var( --main-color)',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        padding: ' 20px',
        borderRadius: '20px',
      }}
      gap={'20px'}
    >
      <HeaderCards />
      <Stack
        direction={'row'}
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        gap={{ xs: '25px', sm: '20px' }}
        flexWrap={'wrap'}
      >
        {cards.map((e, i) => (
          <Card item={e} key={i} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Cards
