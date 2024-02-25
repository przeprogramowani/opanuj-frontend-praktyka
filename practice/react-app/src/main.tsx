import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CountriesProvider } from './context/CountriesApiContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CountriesProvider>
    <App />
  </CountriesProvider>
);
