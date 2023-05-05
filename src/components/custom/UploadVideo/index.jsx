import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Upload({ base64Image, setBase64Image }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
    setBase64Image(event.target.files[0])
  }
  const { t } = useTranslation()

  return (
    <div>
      {base64Image && <video controls src={selectedImage}></video>}
      <Stack
        direction={'row'}
        alignItems={'center'}
        style={{ position: 'relative' }}
        htmlFor="upload-input"
        component="label"
      >
        <Typography
          sx={{
            padding: '5px 10px',
            background: '#dce0e3',
            minWidth: '120px',
            borderRadius: '1rem 0 0 1rem',
          }}
        >
          Choose File
        </Typography>
        <Typography
          sx={{ borderRadius: '0 1rem 1rem 0' }}
          className="custom-input"
        >
          no file selected
        </Typography>
        <input
          // hidden
          style={{
            opacity: 0,
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100%',
          }}
          // accept="image/*"
          onChange={handleImageChange}
          multiple
          type="file"
        />
      </Stack>
    </div>
  )
}
