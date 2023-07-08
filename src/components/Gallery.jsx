import { Box } from '@mui/material'
import React from 'react'

const Gallery = () => {
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
        width={'100%'}
      >
        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '240px'
            },

            backgroundImage: {
              xl: 'url(./desktop/image-gallery-milkbottles.jpg)',
              lg: 'url(./desktop/image-gallery-milkbottles.jpg)',
              md: 'url(./desktop/image-gallery-milkbottles.jpg)',
              sm: 'url(./desktop/image-gallery-milkbottles.jpg)',
              xs: 'url(./mobile/image-gallery-milkbottles.jpg)'
            },

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>

        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '240px'
            },
            backgroundImage: {
              xl: 'url(./mobile/image-gallery-orange.jpg)',
              lg: 'url(./mobile/image-gallery-orange.jpg)',
              md: 'url(./mobile/image-gallery-orange.jpg)',
              sm: 'url(./desktop/image-gallery-orange.jpg)',
              xs: 'url(./mobile/image-gallery-orange.jpg)'
            },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>
      </Box>

      <Box
        display={'flex'}
        width={'100%'}

      >
        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '240px'
            },
            backgroundImage: {
              xl: 'url(./desktop/image-gallery-cone.jpg)',
              lg: 'url(./desktop/image-gallery-cone.jpg)',
              md: 'url(./desktop/image-gallery-cone.jpg)',
              sm: 'url(./desktop/image-gallery-cone.jpg)',
              xs: 'url(./mobile/image-gallery-cone.jpg)'
            },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>

        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '240px'
            },
            backgroundImage: {
              xl: 'url(./desktop/image-gallery-sugarcubes.jpg)',
              lg: 'url(./desktop/image-gallery-sugarcubes.jpg)',
              md: 'url(./desktop/image-gallery-sugarcubes.jpg)',
              sm: 'url(./desktop/image-gallery-sugarcubes.jpg)',
              xs: 'url(./mobile/image-gallery-sugar-cubes.jpg)'
            },
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>
      </Box>

    </Box>
  )
}

export default Gallery