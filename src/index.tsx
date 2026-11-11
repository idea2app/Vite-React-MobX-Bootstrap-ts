import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'idea-react/dist/style.css';

import { auto } from 'browser-unhandled-rejection';
import { serviceWorkerUpdate } from 'web-utility';
import { createRoot } from 'react-dom/client';

import { PageFrame } from './page';

auto();

self.addEventListener('unhandledrejection', ({ reason }) => {
  const { message } = reason as Error;

  if (message) self.alert(message);
});

const { serviceWorker } = window.navigator;

if (import.meta.env.MODE !== 'development')
  serviceWorker
    ?.register('sw.js')
    .then(serviceWorkerUpdate)
    .then(worker => {
      if (window.confirm('New version of this Web App detected, update now?'))
        worker.postMessage({ type: 'SKIP_WAITING' });
    });

serviceWorker?.addEventListener('controllerchange', () =>
  window.location.reload()
);

const app = document.querySelector('#app');

if (!app) throw new Error('Application mount point "#app" was not found');

createRoot(app).render(<PageFrame />);
