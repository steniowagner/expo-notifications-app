import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components';

import appStyles from '../../styles';
import Header from './Header';
import Form from './Form';

const Wrapper = styled(View)`
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
    <Animated.View
      style={[
        {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          transform: [
            {
              translateY: initialPosition.y,
            },
          ],
        },
      ]}
    >
      <Wrapper>
        <Header />
        <Form />
      </Wrapper>
    </Animated.View>
  );
};

export default SignUpCard;
