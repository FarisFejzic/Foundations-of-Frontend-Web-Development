import React from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import { SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'; 
import { FaDatabase } from "react-icons/fa";
const StyledCard = styled(Card)`
  && {
    margin-top: 1.5rem;
    background-color: #f8f9fa; /* Adjust as needed */
    
  }
`;

const Skills = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Typography variant="h3" align="center" mt={3} style={{ paddingTop: 'calc(64px + 1rem)', color: '#191970' }}>Skills</Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <SiCplusplus style={{ color: '#01599d', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>C++</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <SiPython style={{ color: '#FEE873', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>Python</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <SiHtml5 style={{ color: '#f06424', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>HTML</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <SiCss3 style={{ color: '#264de4', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>CSS</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <SiJavascript style={{ color: '#f7df1e', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>JavaScript</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <StyledCard>
          <CardContent>
            <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              <FaDatabase style={{ color: '#01599d', fontSize: '3rem' }} />
            </Box>
            <Typography variant="h4" align="center" gutterBottom>Data Management</Typography>
            <Typography variant="body1" align="center">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
);

export default Skills;