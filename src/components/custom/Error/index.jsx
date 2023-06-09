import { Typography } from '@mui/material'

export const FromError = ({ message, name }) => {
  return (
    <>
      {message?.includes(name) && (
        <Typography sx={{ color: 'red', fontSize: '12px' }}>
          {message}
        </Typography>
      )}
    </>
  )
}
