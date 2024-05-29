import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import { SlowApp } from './routes/AppV1';
import { FastApp } from './routes/AppV2';
import { FasterApp } from './routes/AppV3';
import { clientSideApiLoader } from './loaders/clientSideApiLoader';
import { serverSideApiLoader } from './loaders/serverSideApiLoader';
import { Home } from './routes/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        id: 'home',
        index: true,
        element: <Home />,
      },
      {
        id: 'slow-app',
        loader: clientSideApiLoader,
        path: 'v1',
        element: <SlowApp />,
      },
      {
        id: 'fast-app',
        loader: serverSideApiLoader,
        path: 'v2',
        element: <FastApp />,
      },
      {
        id: 'faster-app',
        loader: serverSideApiLoader,
        path: 'v3',
        element: <FasterApp />,
      },
    ],
  },
]);
