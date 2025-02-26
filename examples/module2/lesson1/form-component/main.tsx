import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);
