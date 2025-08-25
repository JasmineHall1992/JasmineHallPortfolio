import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import PortfolioPage from './components/Portfolio';
import Navigation from './components/Navigation';
import BlogPostsPage from './components/Blog';
import ContactPage from './components/ContactPage'; 
import CaseStudyPage from './components/CaseStudy';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {!isHomePage && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPostsPage />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
