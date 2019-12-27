import React, { useCallback, useEffect } from 'react';
import { AsyncStorage, View } from 'react-native';
import styled from 'styled-components';

import askPermissionNotification from '../../../utils/permissions-handlers/notification';
import CONSTANTS from '../../../utils/constants';
import useFetch from '../../../hooks/useFetch';
import useAlert from '../../../hooks/useAlert';
import SERVER_BASE_URL from '../../../api';
import SignUpCard from './SignUpCard';

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accentColor};
`;

const Home = () => {
  const { fetchData, isLoading, response, error } = useFetch();
  const { renderAlert } = useAlert();

  useEffect(() => {
    if (response) {
      renderAlert({
        description:
          'The user is now signed-up to receive notifications! You can send them now using the Dashboard! 🥳.',
        title: 'Yay!',
      });
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      renderAlert({
        description: error,
        title: 'Oops...',
      });
    }
  }, [error]);

  useEffect(() => {
    askPermissionNotification();
  }, []);

  const getNotificationToken = async () => {
    let notificationToken = null;

    try {
      notificationToken = await AsyncStorage.getItem(CONSTANTS.VALUES.ASYNC_STORAGE_KEY);
    } catch (err) {
      renderAlert({
        description: 'There was a problem when trying to get your notification token.',
        title: 'Oops...',
      });
    }

    return notificationToken;
  };

  const onSubmitRegisterForm = useCallback(async (name: string, email: string) => {
    const notificationToken = await getNotificationToken();

    if (!notificationToken) {
      renderAlert({
        description:
          "You need to set a notification token. If you're running in a simulator, this action will not be possible.",
        title: 'Notification token missed',
      });

      return;
    }

    fetchData({
      url: `${SERVER_BASE_URL}/users`,
      method: 'POST',
      body: {
        notificationToken,
        email,
        name,
      },
    });
  }, []);

  return (
    <Wrapper>
      <SignUpCard onSubmitRegisterForm={onSubmitRegisterForm} isLoading={isLoading} />
    </Wrapper>
  );
};

export default Home;
