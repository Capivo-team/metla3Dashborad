import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function Upload({ base64Image, setBase64Image }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
    setBase64Image(event.target.files[0])
  }
  const { t } = useTranslation()
  const lang = useSelector((e) => e.lang)
  return (
    <div>
      {base64Image && (
        <img
          style={{ width: '80px', height: '80px', borderRadius: '12px' }}
          src={selectedImage}
          alt=""
        />
      )}
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
            borderRadius: lang === 'ltr' ? '1rem 0 0 1rem' : '0 20px 20px 0px',
          }}
        >
          Choose File
        </Typography>
        <Typography
          sx={{
            borderRadius:
              lang === 'ltr' ? '0px 20px 20px 0' : '20px 0px 0px 20px',
          }}
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
          accept="image/*"
          onChange={handleImageChange}
          multiple
          type="file"
        />
      </Stack>
    </div>
  )
}
