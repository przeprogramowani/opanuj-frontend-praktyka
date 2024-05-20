import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

import './App.css';
// import DataList from './Datalist';
import AuthorsList from './AuthorsList';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthorsList />
    </QueryClientProvider>
  );
}

export default App;
