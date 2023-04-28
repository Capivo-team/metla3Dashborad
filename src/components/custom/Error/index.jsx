import { Typography } from '@mui/material'

export const FromError = ({ message, name }) => {
  return (
    <>
      {message.indexOf(name) > 0 && (
        <Typography sx={{ color: 'red', fontSize: '12px' }}>
          {message}
        </Typography>
      )}
    </>
  )
}
