import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  return (
    <div className="p-10 m-10">
      <h2>Rick And Morty Characters:</h2>
      <Characters />
    </div>
  );
}

export default App;
