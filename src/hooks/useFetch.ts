import { useState, useEffect } from 'react';

interface Options {
  method: string;
  body?: object;
  url: string;
}

interface FetchOptions {
  headers: {
    'Content-Type': string;
    Accept: string;
  };
  method: string;
  body: string;
}

const useFetch = (fireWhenMounted: boolean = false, defaultOptions: Options = null) => {
  const [options, setOptions] = useState<Options>(defaultOptions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error>(null);

  const getFetchOptions = (): FetchOptions => {
    const { method, body } = options;

    const fetchOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      method,
    };

    return fetchOptions;
  };

  const startFetch = async (): Promise<void | undefined> => {
    const fetchOptions = getFetchOptions();

    const rawResponse = await fetch(options.url, fetchOptions);
    const response = await rawResponse.json();

    if (rawResponse.ok) {
      return setResponse(response);
    }

    setError(response);
  };

  const fetchData = async () => {
    if (!options) {
      return;
    }

    setIsLoading(true);

    try {
      await startFetch();
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (fireWhenMounted) {
      setError(null);

      fetchData();
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [options]);

  return {
    fetchData: setOptions,
    isLoading,
    response,
    error,
  };
};

export default useFetch;
