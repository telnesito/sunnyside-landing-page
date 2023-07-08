import { Box, Typography } from '@mui/material'
import React from 'react'

const Comments = () => {

  const testimonials = [
    {
      image: './images/image-emily.jpg',
      comment: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      ocupation: 'Marketing Director'
    },

    {
      image: './images/image-thomas.jpg',
      comment: 'Sunnysides enthusiasm couple with their keen interest in our brands succes made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      ocupation: 'Chief Operating Officer'
    },

    {
      image: './images/image-jennie.jpg',
      comment: 'Incredible end result! Our sales increased over 400% when we worker with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      ocupation: 'Business Owner'
    },

  ]

  return (
    <Box
      id={'projects'}
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
      bgcolor={'white'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'auto'}
      minHeight={'600px'}
      gap={'70px'}
      paddingBottom={'70px'}
      paddingTop={'70px'}


    >

      <Typography
        letterSpacing={'4px'}
        color={'hsl(210, 4%, 67%)'}
        fontWeight={'900'}
        fontFamily={'Fraunces'}
      >CLIENT TESTIMONIALS
      </Typography>

      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'50px'}

        sx={{
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column'
          }
        }}

      >
        {testimonials.map(({ image, comment, name, ocupation }, index) => <Box


          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'35px'}

          key={index}>
          <img width={'80px'} src={image} style={{
            borderRadius: '50%'
          }} />

          <Typography
            color={'hsl(213, 9%, 39%)'}
            fontSize={'18px'}
            fontFamily={'Barlow'}
            width={'85%'}
            textAlign={'center'}
          >
            {comment}
          </Typography>

          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'10px'}
          >
            <Typography
              fontFamily={'Fraunces'}
              fontWeight={'900'}
              fontSize={'18px'}
            >{name}</Typography>
            <Typography
              fontFamily={'Barlow'}
              color={'hsl(210, 4%, 67%)'}

            >{ocupation}</Typography>
          </Box>

        </Box>)}
      </Box>



    </Box>
  )
}

export default Comments