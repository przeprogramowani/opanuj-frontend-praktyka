import { createRoot } from 'react-dom/client';
import Articles from './Articles';
import Comments from './Comments';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <>
      <Articles />
      <Comments />
    </>
  );
}
