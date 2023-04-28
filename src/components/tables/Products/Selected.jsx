import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Selected({
  label,
  data,
  selectedData,
  setSelectedData,
}) {
  const handleChange = (event) => {
    setSelectedData(event.target.value)
  }
console.log(data);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <select      className='custom-select'

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedData}
          onChange={handleChange}
        >
          {data.map((e, i) => (
            <option key={i} value={e._id}>
              {e.nameEN}
            </option>
          ))}
        </select>
      </FormControl>
    </Box>
  )
}
