import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './src/components/pages/home/Home';
import AppTheme from './src/styles';

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <Home />
  </ThemeProvider>
);

export default App;
