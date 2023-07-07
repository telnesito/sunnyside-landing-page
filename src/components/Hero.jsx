import { Box } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <Box
      width={'100%'}
      height={'600px'}
      sx={{
        backgroundImage: 'url(./mobile/image-header.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}

    >
      <NavBar />
    </Box>
  )
}

export default Hero