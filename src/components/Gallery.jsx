import { Box } from '@mui/material'
import React from 'react'

const Gallery = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'100%'}
    >
      <Box
        display={'flex'}
      >
        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            backgroundImage: 'url(./mobile/image-gallery-milkbottles.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>

        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            backgroundImage: 'url(./mobile/image-gallery-orange.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>
      </Box>

      <Box
        display={'flex'}
      >
        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            backgroundImage: 'url(./mobile/image-gallery-cone.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </Box>

        <Box
          width={'50%'}
          height={'240px'}
          sx={{
            backgroundImage: 'url(./mobile/image-gallery-sugar-cubes.jpg)',
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