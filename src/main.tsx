import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { initGA } from './lib/analytics';
import { initErrorTracking } from './lib/error-tracking';
import { trackCoreWebVitals } from './lib/performance';
import './index.css';

// Initialize monitoring and analytics
if (process.env.NODE_ENV === 'production') {
  initGA();
  initErrorTracking();
  trackCoreWebVitals();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);