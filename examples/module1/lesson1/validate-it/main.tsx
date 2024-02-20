import ReactDOM from 'react-dom/client';
import Main from './components/Main';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(<Main />);
}
