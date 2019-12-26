import React, { useEffect, memo } from 'react';
import { KeyboardAvoidingView, Animated } from 'react-native';
import styled from 'styled-components';

import appStyles from '../../styles';
import Header from './Header';
import Form from './Form';

const Wrapper = styled(Animated.View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('85%')}px;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  padding-bottom: ${({ theme }) => theme.metrics.largeSize}px;
  border-radius: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

interface Props {
  onSubmitRegisterForm: (name: string, email: string) => void;
  isLoading: boolean;
}

const SignUpCard = ({ onSubmitRegisterForm, isLoading }: Props) => {
  const initialPosition = new Animated.ValueXY({
    x: 0,
    y: appStyles.metrics.height,
  });

  useEffect(() => {
    Animated.spring(initialPosition.y, {
      useNativeDriver: true,
      bounciness: 4,
      toValue: 0,
      speed: 5,
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      behavior="padding"
    >
      <Wrapper
        style={[
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
            transform: [
              {
                translateY: initialPosition.y,
              },
            ],
          },
        ]}
      >
        <Header />
        <Form onSubmit={onSubmitRegisterForm} isLoading={isLoading} />
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default memo(SignUpCard);
