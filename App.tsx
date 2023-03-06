import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './src/styles/theme';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
