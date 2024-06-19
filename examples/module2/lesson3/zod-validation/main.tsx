import React from 'react';
import ReactDOM from 'react-dom/client';
import Articles from './articles/components/Articles';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <>
      <Articles />
    </>
  );
}
