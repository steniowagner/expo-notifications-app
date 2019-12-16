import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import SignUpCard from './SignUpCard';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentColor};
`;

const Home = () => (
  <Wrapper>
    <SignUpCard />
  </Wrapper>
);

export default Home;
