import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

type Options = {
  description: string,
  title: string,
};

const useAlert = () => {
  const [options, setOptions] = useState<Options>(null);

  useEffect(() => {
    if (!options) {
      return;
    }

    Alert.alert(
      options.title,
      options.description,
      [
        {
          onPress: () => setOptions(null),
          style: 'cancel',
          text: 'OK',
        },
      ],
      { cancelable: false },
    );
  }, [options]);

  return {
    renderAlert: (alertOptions: Options) => {
      setOptions(alertOptions);
    },
  };
};

export default useAlert;
