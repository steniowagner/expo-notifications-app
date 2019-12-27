import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import TextInput from '../../TextInput';
import Button from '../../Button';

const Wrapper = styled(View)`
  margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('12%')}px;
`;

interface Props {
  onSubmit: (name: string, email: string) => void;
  isLoading: boolean;
}

const Form = ({ isLoading, onSubmit }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onSubmitForm = () => {
    onSubmit(name, email);
  };

  return (
    <Wrapper>
      <TextInput placeholder="Your name" onChangeText={setName} withMarginBottom value={name} type="default" />
      <TextInput
        placeholder="Your e-mail"
        onChangeText={setEmail}
        type="email-address"
        withMarginBottom
        value={email}
      />
      <Button onPress={onSubmitForm} isLoading={isLoading} label="sign-up" disabled={!email || !name} />
    </Wrapper>
  );
};

export default Form;
