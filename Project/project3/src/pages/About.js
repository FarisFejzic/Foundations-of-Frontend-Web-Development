import React from 'react';
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Grid)`
  padding: 2rem;
`;

const Title = styled(Typography)`
  text-align: center;
  color: #191970;
`;

const ContentContainer = styled.div`
  padding-top: calc(64px + 1rem); 
`;

const About = () => {
  return (
    <ContentContainer>
      <StyledContainer container spacing={3}>
        
        <Grid item xs={12}>
          <Title variant="h3">About Me</Title>
        </Grid>
        
        
        <Grid item xs={12}>
          <Typography variant="body1">
            LLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
          </Typography>
        </Grid>
        
        
        <Grid item xs={12}>
          <ul>
            <li>Name: Faris Fejzic</li>
            <li>Age: 20</li>
            <li>Occupation: Web Developer</li>
          </ul>
        </Grid>
        
        
        <Grid item xs={12}>
          <Typography variant="body1">
            Vivamus vel felis nec mauris porttitor hendrerit. Integer fringilla auctor hendrerit. Proin vitae enim sit amet lorem faucibus ultrices.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
        </Grid>
      </StyledContainer>
    </ContentContainer>
  );
};

export default About;