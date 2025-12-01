import { GlobalPortal, GlobalStyles } from 'tosslib';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@shared/queries';
import { Routes } from '@shared/routes';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <GlobalPortal.Provider>
        <Routes />
      </GlobalPortal.Provider>
    </QueryClientProvider>
  );
}
