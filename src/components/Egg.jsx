import { Box, Typography } from '@mui/material'
import React from 'react'

const Egg = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
    >

      <Box
        width={'100%'}
        height={'400px'}
        sx={{
          backgroundImage: 'url(./mobile/image-transform.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Box>

      <Box
        width={'100%'}
        height={'450px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        gap={'20px'}
        bgcolor={'white'}
      >
        <Typography
          fontSize={'35px'}
          fontWeight={'900'}
          textAlign={'center'}
          fontFamily={'Fraunces'}
        >Transform your brand</Typography>

        <Typography
          fontSize={'18px'}
          color={'hsl(213, 9%, 39%)'}
          width={'85%'}
          textAlign={'center'}
          fontFamily={'Barlow'}
        >
          We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
        </Typography>

        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            cursor: 'pointer'
          }}
        >
          <Typography
            zIndex={'2'}

            fontWeight={'900'}
            textAlign={'center'}
            fontFamily={'Fraunces'}
          >
            LEARN MORE
          </Typography>

          <Box
            zIndex={'1'}
            position={'relative'}
            top={'-8px'}
            bgcolor={'hsl(51, 100%, 85%)'}
            height={'10px'}
            width={'110%'}
            borderRadius={'25px'}
          >


          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Egg