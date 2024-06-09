import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';

const HeaderContainer = styled(AppBar)`
  && {
    background-color: #191970;
  }
`;

const NavbarLink = styled(Link)`
  && {
    color: white;
    margin-right: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Contact', path: '/contact' },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Faris F
        </Typography>
        {isMobile ? (
          <div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.title}
                  onClick={handleMenuClose}
                  component={Link}
                  to={link.path}
                >
                  {link.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ) : (
          <div>
            {navLinks.map((link) => (
              <NavbarLink to={link.path} key={link.title}>
                {link.title}
              </NavbarLink>
            ))}
          </div>
        )}
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;