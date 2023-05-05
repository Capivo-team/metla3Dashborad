import * as React from 'react'
import Switch from '@mui/material/Switch'
import Apiservices from '../../../services/ApiServices'

const label = { inputProps: { 'aria-label': 'Color switch demo' } }

export default function ColorSwitches({ status }) {
  const [state, setState] = React.useState(status.status === 0 ? false : true)
  const handleChange = (event) => {
    setState(event.target.checked)
    console.log(state)
    Apiservices.put(`/vendor/manufacturers/status/${status.id}`, {
      status: state ? 0 : 1,
    })
  }
  return (
    <>
      <Switch
        checked={state}
        onChange={handleChange}
        {...label}
        defaultChecked
        color="warning"
      />
    </>
  )
}
