import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import FF from './aboutme.jpg'; 
const StyledContainer = styled(Grid)`
  height: 100vh;
`;

const LeftSection = styled(Grid)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RightSection = styled(Grid)`
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  max-width: 100vh;
  max-height: 100vh;
`;

const Title = styled(Typography)`
  color: white !important;
`;

const Subtitle = styled(Typography)`
  color: white !important;
`;

const Home = () => {
  return (
    <StyledContainer container>
      <LeftSection item xs={12} sm={4}>
        <Image src={FF} alt="Your Image" />
      </LeftSection>
      <RightSection item xs={12} sm={8}>
        <Typography variant="h3" style={{ color: 'white' }}>Web Developer</Typography>
      </RightSection>
    </StyledContainer>
  );
};

export default Home;