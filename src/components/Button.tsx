import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components';

import appStyles from '../styles';

const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('8%')}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.metrics.extraSmallSize}px;
  background-color: ${({ isLoading, theme }) => (
    isLoading
      ? theme.colors.transparentAccent
      : theme.colors.primaryColor
  )};
`;

const ButtonText = styled(Text)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.metrics.getWidthFromDP('4.5%')}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-transform: uppercase;
`;

type Props = {
  onPress: () => void;
  isLoading?: boolean;
  label: string;
};

const Button = ({ isLoading, onPress, label }: Props) => (
  <Wrapper
    disabled={isLoading === true}
    isLoading={isLoading}
    onPress={onPress}
  >
    {!isLoading && <ButtonText>{label}</ButtonText>}
    {isLoading && <ActivityIndicator
      color={appStyles.colors.primaryColor}
      size="small"
    />}
  </Wrapper>
);

export default Button;
