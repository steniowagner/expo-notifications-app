import { Platform, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

import CONSTANTS from '../constants';

const persistToken = async () => {
  try {
    const token = await Notifications.getExpoPushTokenAsync();

    await AsyncStorage.setItem(CONSTANTS.VALUES.ASYNC_STORAGE_KEY, token);
  } catch (err) {
    throw err;
  }
};

const notification = async () => {
  if (Platform.OS === 'android') {
    await Notifications.createChannelAndroidAsync(CONSTANTS.VALUES.ANDROID_NOTIFICATIONS_CHANNEL, {
      vibrate: [0, 250, 250, 250],
      name: 'Notifications',
      sound: true,
    });
  }

  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  await persistToken();
};

export default notification;
