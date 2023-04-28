import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
import Chart from '../components/chart'
import { useTranslation } from 'react-i18next'
import { Container, Stack, Typography } from '@mui/material'
import Cards from '../components/chart/Cards'
import VerticalBarChart from '../components/chart/Test'
import DoughnutChart from '../components/chart/Cercile'
import PolarAreaChart from '../components/chart/Polar'
import RadarChart from '../components/chart/Radar'
import BubbleChart from '../components/chart/Bubal'
import HeaderCarts from '../components/chart/HeaderCarts'

function Dashboard() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(actions.setActiveItemMenu(0))
  }, [])
  const { t } = useTranslation()

  return (
    <Container
      maxWidth="1300px"
      gap={'20px'}
      p={{ sm: '0 50px', xs: '0 20px' }}
    >
      <Stack mt={'50px'} gap="20px" justifyContent={{ xs: 'center' }}>
        <Cards />
        <Stack
          gap={{ sx: '50px', sm: '0' }}
          sx={{
            background: 'var( --main-color)',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
          p={'20px'}             borderRadius={'20px'}

        >
          <HeaderCarts/>
          <Stack
            direction={'row'}
            justifyContent={{ lg: 'space-between', xs: 'center' }}
            flexWrap={'wrap'}
          >
            <DoughnutChart />

            <VerticalBarChart />
          </Stack>
          {/* <BubbleChart /> */}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Dashboard
