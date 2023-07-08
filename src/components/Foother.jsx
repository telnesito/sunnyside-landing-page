import { Box, Typography } from '@mui/material'
import React from 'react'

const Foother = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      component={'footer'}
      bgcolor={'hsl(168, 34%, 70%)'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'400px'}
      gap={'50px'}
    >

      <Typography
        color={'hsl(168, 34%, 35%)'}
        fontFamily={'Barlow'}
        fontWeight={'900'}
        fontSize={'35px'}
      >sunnyside</Typography>
      <Box
        display={'flex'}
        width={'90%'}
        gap={'40px'}
        justifyContent={'center'}
      >
        <Typography
          fontSize={'18px'}
          color={'hsl(168, 34%, 41%)'}
          fontFamily={'Barlow'}

        >About</Typography>
        <Typography
          fontSize={'18px'}

          color={'hsl(168, 34%, 41%)'}

          fontFamily={'Barlow'}

        >Services</Typography>
        <Typography
          fontSize={'18px'}

          color={'hsl(168, 34%, 41%)'}


          fontFamily={'Barlow'}

        >Projects</Typography>

      </Box>

      <Box display={'flex'}
        gap={'35px'}
        justifyContent={'center'}
        width={'90%'}
      >
        <img src='./images/icon-facebook.svg' />
        <img src='./images/icon-instagram.svg' />
        <img src='./images/icon-twitter.svg' />
        <img src='./images/icon-pinterest.svg' />

      </Box>

    </Box>
  )
}

export default Foother