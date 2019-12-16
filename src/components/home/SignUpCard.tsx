import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Animated, View } from 'react-native';
import styled from 'styled-components';

import appStyles from '../../styles';
import Header from './Header';
import Form from './Form';

const Wrapper = styled(Animated.View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('85%')}px;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
  border-radius: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.white};

`;

const SignUpCard = () => {
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

          transform: [
            {
              translateY: initialPosition.y,
            },
          ],
        },
      ]}
    >
        <Header />
        <Form />
    </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default SignUpCard;
