import './App.css';
import FrontPage from './pages/FrontPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FrontPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
