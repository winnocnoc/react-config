import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { AppRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const ErrorFallback = () => {
  return <div>Something went wrong</div>;
};

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppRoutes />
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
