import { Container } from 'idea-react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { MainNavigator } from '../component/MainNavigator';

const HomePage = lazy(() => import('./Home'));
const ComponentPage = lazy(() =>
  import('./Component').then(({ ComponentPage }) => ({ default: ComponentPage }))
);
const PaginationPage = lazy(() =>
  import('./Pagination').then(({ PaginationPage }) => ({
    default: PaginationPage
  }))
);
const ScrollListPage = lazy(() =>
  import('./ScrollList').then(({ ScrollListPage }) => ({
    default: ScrollListPage
  }))
);
const ChartPage = lazy(() => import('./chart.mdx'));
const DownloaderPage = lazy(() =>
  import('./Downloader').then(({ DownloaderPage }) => ({
    default: DownloaderPage
  }))
);

export const PageFrame = () => (
  <>
    <MainNavigator />

    <HashRouter>
      <Suspense fallback={<Container className="py-4" role="status">Loading…</Container>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/component" element={<ComponentPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/scroll-list" element={<ScrollListPage />} />
          <Route
            path="/chart"
            element={
              <Container>
                <ChartPage />
              </Container>
            }
          />
          <Route path="/downloader" element={<DownloaderPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  </>
);
