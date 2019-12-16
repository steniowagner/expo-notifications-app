import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';

import appStyles from '../../styles';

const Wrapper = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('15%')}px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.metrics.getWidthFromDP('7.5%')}px;
  background-color: ${({ theme }) => theme.colors.transparentAccent};
`;

const Header = () => (
  <Wrapper>
    <IconWrapper>
    <MaterialIcons
      size={appStyles.metrics.getWidthFromDP('7.5%')}
      color={appStyles.colors.primaryColor}
      name="notifications-none"
    />
    </IconWrapper>
  </Wrapper>
);

export default Header;
