import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import './App.css';
import DataList from './Datalist';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataList />
    </QueryClientProvider>
  );
}

export default App;
