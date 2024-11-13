import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </AppProvider>
  );
};

export default App;
