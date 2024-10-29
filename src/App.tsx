import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DestinationPage } from './pages/DestinationPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { VenuesPage } from './pages/VenuesPage';
import { PhotographersPage } from './pages/PhotographersPage';
import { PlannersPage } from './pages/PlannersPage';
import { BlogPage } from './pages/BlogPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationPage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/photographers" element={<PhotographersPage />} />
        <Route path="/planners" element={<PlannersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}