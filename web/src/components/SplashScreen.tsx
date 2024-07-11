import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/theme';

const SplashScreen: React.FC = () => {
  return (
    <SplashScreenContainer>
      <Logo>LOGO</Logo>
    </SplashScreenContainer>
  );
};

export default SplashScreen;

const SplashScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.Main};
`;

const Logo = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: bold;
`;
