import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './src/styles/theme';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './src/styles/GlobalStyle';
import PopupJs from './src/hooks/PopUp/PopUpJs';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <PopupJs />
          <Router />
          <GlobalStyle />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
