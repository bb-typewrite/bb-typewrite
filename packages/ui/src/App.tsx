import { Button, Loading } from '@nextui-org/react';
import * as React from 'react';
import { Inspector } from 'react-dev-inspector';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { tw } from 'twind';

import { Routes } from './routes';
import { queryClient } from './utils/libs/react-query';

const ErrorFallback = () => {
  return (
    <div className={tw`text-red-500 w-screen h-screen flex(& col) justify-center items-center`} role="alert">
      <h2 className={tw`text-lg font-semibold`}>Ooops, something went wrong :( </h2>
      <Button className={tw`mt-4`} onClick={() => location.assign(location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

export function App() {
  return (
    <React.Suspense
      fallback={
        <div className={tw`flex items-center justify-center w-screen h-screen`}>
          <Loading type="points" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && (
            <>
              <Inspector />
              <ReactQueryDevtools />
            </>
          )}
          <Router>
            <Routes />
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
