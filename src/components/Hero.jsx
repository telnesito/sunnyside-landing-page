import { Box, Typography } from '@mui/material'
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

      <Box
        display={'flex'}
        flexDirection={'column'}
        height={'500px'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'50px'}
      >
        <Typography
          textAlign={'center'}
          variant='h4'
          fontSize={'40px'}
          width={'90%'}
          fontWeight={'900'}
          letterSpacing={'8px'}

          fontFamily={'Fraunces'}
          color={'white'}
        >
          WE ARE CREATIVES
        </Typography>

        <img height={'130px'} width={'40px'} src='./images/icon-arrow-down.svg' />
      </Box>
    </Box>
  )
}

export default Hero