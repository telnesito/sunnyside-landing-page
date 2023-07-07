import { Box, IconButton, Typography } from '@mui/material'
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
    >
      <Typography
        fontFamily={'Barlow'}
        fontSize={'28px'}
        fontWeight={700}
        color={'white'}
        paddingLeft={'30px'}
      >sunnyside</Typography>
      <IconButton
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