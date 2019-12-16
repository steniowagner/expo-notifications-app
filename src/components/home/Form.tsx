import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import TextInput from '../TextInput';
import Button from '../Button';

const Wrapper = styled(View)`
  margin-top: ${({ theme }) => theme.metrics.getWidthFromDP('8%')}px;
`;

const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onSubmitForm = () => {
    console.log(name, email);
  }

  return (
    <Wrapper>
      <TextInput
        placeholder="Your name"
        onChangeText={setName}
        withMarginBottom
        value={name}
        label="name"
        type="name"
        withLabel
      />
      <TextInput
        placeholder="Your e-mail"
        onChangeText={setEmail}
        withMarginBottom
        value={email}
        label="e-mail"
        type="emailAddress"
        withLabel
      />
      <Button
        onPress={onSubmitForm}
        label="register"
      />
    </Wrapper>
  );
};

export default Form;
