import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TanStackQueryPractice from './components/TanStackQueryPractice/TanStackQueryPractice';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <TanStackQueryPractice />
      </div>
    </QueryClientProvider>
  );
}
