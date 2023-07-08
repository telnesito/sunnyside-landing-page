import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'

const MenuMobile = ({ open, handleClose, anchorEl }) => {
  return (
    <Menu


      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'90vw'}
        height={'300px'}
        gap={'10px'}
      >

        <MenuItem
          sx={{
            width: '100%'

          }}
          onClick={handleClose}
        >
          <Typography
            component={'a'}
            href='#about'
            textAlign={'center'}
            width={'100%'}
            fontFamily={'Barlow'}
            fontWeight={'600'}
            color={'hsl(232, 10%, 55%)'}
            fontSize={'18px'}
          >About</Typography>

        </MenuItem>

        <MenuItem
          sx={{
            width: '100%'
          }}
          onClick={handleClose}
        >
          <Typography
            component={'a'}
            href='#services'
            textAlign={'center'}
            width={'100%'}
            fontFamily={'Barlow'}
            fontWeight={'600'}
            color={'hsl(232, 10%, 55%)'}
            fontSize={'18px'}


          >Services</Typography>

        </MenuItem>

        <MenuItem
          sx={{
            width: '100%'
          }}
          onClick={handleClose}
        >
          <Typography
            component={'a'}
            href='#projects'
            textAlign={'center'}
            width={'100%'}
            fontFamily={'Barlow'}
            fontWeight={'600'}
            color={'hsl(232, 10%, 55%)'}
            fontSize={'18px'}


          >Projects</Typography>

        </MenuItem>

        <MenuItem
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
          onClick={handleClose}
        >
          <Button
            href='#footer'
            sx={{
              bgcolor: 'hsl(51, 100%, 49%)',
              color: 'black',
              padding: '15px',
              width: '150px',
              borderRadius: '25px',
              fontFamily: 'Fraunces',
              "&:hover": {
                bgcolor: 'hsl(51, 100%, 70%)',


              }
            }}
            variant='contained'
          >
            Contact
          </Button>

        </MenuItem>

      </Box>








    </Menu>
  )
}

export default MenuMobile