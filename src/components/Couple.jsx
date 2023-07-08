import { Box, Typography } from '@mui/material'
import React from 'react'

const Couple = () => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      sx={{
        flexDirection: {
          xl: 'row-reverse',
          lg: 'row-reverse',
          md: 'row-reverse',
          sm: 'row-reverse',
          xs: 'column'
        }
      }}
    >
      <Box
        width={'100%'}
        minHeight={'400px'}
        sx={{
          backgroundImage: {
            xl: 'url(./desktop/image-stand-out.jpg)',
            lg: 'url(./desktop/image-stand-out.jpg)',
            md: 'url(./desktop/image-stand-out.jpg)',
            sm: 'url(./desktop/image-stand-out.jpg)',
            xs: 'url(./mobile/image-stand-out.jpg)'
          },
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
          width={'90%'}
          fontSize={'35px'}
          fontWeight={'900'}
          textAlign={'center'}
          fontFamily={'Fraunces'}
        >Stand out to the right audience</Typography>

        <Typography
          fontSize={'18px'}
          color={'hsl(213, 9%, 39%)'}
          width={'85%'}
          textAlign={'center'}
          fontFamily={'Barlow'}
        >
          Using a collaborative formula of designers, researchers, photographers, videographers, and your brand in digital places.
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
            bgcolor={'hsl(7, 99%, 85%)'}
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

export default Couple