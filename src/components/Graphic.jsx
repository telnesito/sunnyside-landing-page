import { Box, Typography } from '@mui/material'
import React from 'react'

const Graphic = () => {
  return (
    <Box
      display={'flex'}
      width={'100%'}

      sx={{
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'row',
          sm: 'row',
          xs: 'column'
        }
      }}
    >

      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'end'}
        width={'100%'}
        height={'500px'}
        gap={'25px'}
        flexDirection={'column'}
        paddingBottom={'40px'}
        sx={{
          backgroundImage: {
            xl: 'url(./desktop/image-graphic-design.jpg)',
            lg: 'url(./desktop/image-graphic-design.jpg)',
            md: 'url(./desktop/image-graphic-design.jpg)',
            sm: 'url(./desktop/image-graphic-design.jpg)',
            xs: 'url(./mobile/image-graphic-design.jpg)'
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'25px'}
          width={'90%'}
        >
          <Typography
            color={'hsl(167, 40%, 24%)'}
            fontFamily={'Fraunces'}
            fontWeight={'900'}
            fontSize={'30px'}

          >Graphic Design</Typography>

          <Typography
            color={'hsl(167, 40%, 24%)'}

            textAlign={'center'}
            fontFamily={'Barlow'}

          >
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.
          </Typography>
        </Box>
      </Box>

      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'end'}
        width={'100%'}
        height={'500px'}
        gap={'25px'}
        flexDirection={'column'}
        paddingBottom={'40px'}
        sx={{
          backgroundImage: {
            xl: 'url(./desktop/image-photography.jpg)',
            lg: 'url(./desktop/image-photography.jpg)',
            md: 'url(./desktop/image-photography.jpg)',
            sm: 'url(./desktop/image-photography.jpg)',
            xs: 'url(./mobile/image-photography.jpg)'
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'25px'}
          width={'90%'}
        >
          <Typography
            color={'hsl(198, 62%, 26%)'}
            fontFamily={'Fraunces'}
            fontWeight={'900'}
            fontSize={'30px'}

          >Photography</Typography>

          <Typography
            color={'hsl(198, 62%, 26%)'}

            textAlign={'center'}
            fontFamily={'Barlow'}

          >
            Increase your credibility by getting the most stunning, hight-quality photos that improve your business image.
          </Typography>
        </Box>
      </Box>



    </Box>
  )
}

export default Graphic