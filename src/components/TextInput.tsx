import React, { memo } from 'react';
import { TextInput, View } from 'react-native';

import styled from 'styled-components';

const Wrapper = styled(View)`
  margin-bottom: ${({ withMarginBottom, theme }) => withMarginBottom ? theme.metrics.extraLargeSize : 0 }px;
`;

const ContentContainer = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('8%')}px;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.accentColor};
  border-width: 2px;
  border-radius: 4px;
`;

const CustomInput = styled(TextInput).attrs(({ placeholder, type, theme }) => ({
  placeholderTextColor: theme.colors.subTextWhite,
  underlineColorAndroid: 'transparent',
  selectionColor: theme.colors.transparentAccent,
  autoCapitalize: 'none',
  keyboardType: type,
  autoCorrect: false,
  placeholder,
}))`
  width: 100%;
  font-size: ${({ theme }) => 1.1 * theme.metrics.largeSize}px;
  color: ${({ theme }) => theme.colors.text};
`;

type Props = {
  onChangeText: (value: string) => void;
  withMarginBottom?: boolean;
  placeholder: string,
  value: string;
  type: string,
};

const shouldComponentUpdate = (previousProps: Props, nextProps: Props) => {
  if (previousProps.value !== nextProps.value) {
    return false;
  }

  return true;
};

const Input = memo<Props>(({
  withMarginBottom,
  onChangeText,
  placeholder,
  value,
  type
}: Props) => (
  <Wrapper
    withMarginBottom={withMarginBottom}
  >
    <ContentContainer>
      <CustomInput
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </ContentContainer>
  </Wrapper>
), shouldComponentUpdate);

export default Input;
