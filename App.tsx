import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Notifications } from 'expo';

import Home from './src/components/home/Home';
import AppTheme from './src/styles';

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <Home />
  </ThemeProvider>
);

export default App;

/*
export default function App() {
  const getToken = async () => {
    return await Notifications.getExpoPushTokenAsync();
  };

  useEffect(() => {
    async function anyNameFunction() {
      const token = await getToken();
      console.log("token: ", token);
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('@EXPO_NOTIFICATIONS-APP', {
        vibrate: [0, 250, 250, 250],
        name: 'Notifications',
        sound: true,
      });
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
