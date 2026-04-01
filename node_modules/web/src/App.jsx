
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import NewsDetailPage from './pages/NewsDetailPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:newsId" element={<NewsDetailPage />} />

        

        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-[#0B1F3B] mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>404</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Không tìm thấy trang
              </h2>
              <p className="text-gray-600 mb-8" style={{fontFamily: 'Open Sans, sans-serif'}}>
                Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
              </p>
              <a 
                href="/" 
                className="inline-block bg-[#D4AF37] hover:bg-[#C19B2F] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
                style={{fontFamily: 'Open Sans, sans-serif'}}
              >
                Về trang chủ
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
