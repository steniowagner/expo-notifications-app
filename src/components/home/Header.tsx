import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';

import appStyles from '../../styles';

const IconWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('18%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('18%')}px;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: absolute;
  top: ${({ theme }) => -theme.metrics.getWidthFromDP('9%')}px;
  border-radius: ${({ theme }) => theme.metrics.getWidthFromDP('9%')}px;
  background-color: ${({ theme }) => theme.colors.transparentAccent};
`;

const Header = () => (
  <IconWrapper>
    <AntDesign
      size={appStyles.metrics.getWidthFromDP('9%')}
      color={appStyles.colors.primaryColor}
      name="user"
    />
  </IconWrapper>
);

export default Header;
