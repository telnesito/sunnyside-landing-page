import { Box, Button, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Menu from './Menu';
// font-family: 'Barlow', sans-serif;
// font-family: 'Fraunces', serif;

const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <Box
      bgcolor={'#00000000'}
      display={'flex'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}
      height={'70px'}
      gap={'10px'}

    >
      <Typography
        fontFamily={'Barlow'}
        fontSize={'28px'}
        fontWeight={700}
        color={'white'}
        paddingLeft={'30px'}
      >sunnyside</Typography>

      <Box

        sx={{
          display: {
            xl: 'flex',
            lg: 'flex',
            md: 'flex',
            sm: 'none',
            xs: 'none'
          }
        }}
        display={'flex'}
        gap={'40px'}
        alignItems={'center'}
        paddingRight={'30px'}
      >
        <Typography
          fontFamily={'Barlow'}
          color={'white'}
        >About</Typography>
        <Typography
          fontFamily={'Barlow'}
          color={'white'}
        >Services</Typography>
        <Typography
          fontFamily={'Barlow'}
          color={'white'}
        >Projects</Typography>

        <Button
          variant='contained'
          sx={{
            bgcolor: 'white',
            color: 'black',
            borderRadius: '25px',
            padding: '10px',
            width: '135px',
            fontFamily: 'Fraunces',
            "&:hover": {
              bgcolor: '#00000010',
              color: 'white'

            }
          }}
        >contact</Button>


      </Box>

      <IconButton
        sx={{
          display: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'block',
            xs: 'block'
          }
        }}
        onClick={handleClick}
        size='large'>
        <MenuIcon fontSize='large' sx={{
          color: 'white'
        }} />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  )
}

export default NavBar