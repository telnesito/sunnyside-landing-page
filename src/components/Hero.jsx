import { Box, Typography } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <Box
      width={'100%'}
      height={'600px'}
      sx={{
        backgroundImage: {
          xl: 'url(./desktop/image-header.jpg)',
          lg: 'url(./desktop/image-header.jpg)',
          md: 'url(./desktop/image-header.jpg)',
          sm: 'url(./desktop/image-header.jpg)',
          xs: 'url(./mobile/image-header.jpg)'
        },
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
          width={'90%'}
          fontWeight={'900'}
          letterSpacing={'4px'}

          fontFamily={'Fraunces'}
          color={'white'}

          sx={{
            fontSize: {
              xl: '70px',
              lg: '70px',
              md: '70px',
              sm: '40px',
              xs: '40px'
            }
          }}

        >
          WE ARE CREATIVES
        </Typography>

        <img height={'130px'} width={'40px'} src='./images/icon-arrow-down.svg' />
      </Box>
    </Box>
  )
}

export default Hero