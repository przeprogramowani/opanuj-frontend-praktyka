import { createRoot } from 'react-dom/client';
import Articles from './articles/components/Articles';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <>
      <Articles />
    </>
  );
}
