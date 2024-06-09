import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';

const FooterContainer = styled('footer')({
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '1rem',
  height: '100%',
});

const Footer = () => (
  <FooterContainer>
    <Container maxWidth="lg">
      <Grid container alignItems="center">
        <Grid item xs={6} sx={{ textAlign: 'left' }}>
          &copy; {new Date().getFullYear()} My Portfolio
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: 'right' }}>
            <IconButton
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="#/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </FooterContainer>
);

export default Footer;