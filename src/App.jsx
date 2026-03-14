
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import FreelanceProjectsPage from './pages/FreelanceProjectsPage.jsx';
import EternoProjectPage from './pages/EternoProjectPage.jsx';
import MatsuProjectPage from './pages/MatsuProjectPage.jsx';
import DcfProjectPage from './pages/DcfProjectPage.jsx';
import TimoumiProjectPage from './pages/TimoumiProjectPage.jsx';
import AhProjectPage from './pages/AhProjectPage.jsx';
import RueDeLaModeProjectPage from './pages/RueDeLaModeProjectPage.jsx';
import RebellionProjectPage from './pages/RebellionProjectPage.jsx';
import EnactusProjectPage from './pages/EnactusProjectPage.jsx';
import CaoProjectPage from './pages/CaoProjectPage.jsx';
import GamingFreaksProjectPage from './pages/GamingFreaksProjectPage.jsx';
import IeeeProjectPage from './pages/IeeeProjectPage.jsx';
import RivezliProjectPage from './pages/RivezliProjectPage.jsx';
import ProfessionalProjectsPage from './pages/ProfessionalProjectsPage.jsx';
import AssociativeProjectsPage from './pages/AssociativeProjectsPage.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freelance-projects" element={<FreelanceProjectsPage />} />
        <Route path="/freelance-projects/eterno" element={<EternoProjectPage />} />
        <Route path="/freelance-projects/matsu" element={<MatsuProjectPage />} />
        <Route path="/freelance-projects/djerba-chess-festival" element={<DcfProjectPage />} />
        <Route path="/freelance-projects/timoumi-jewelry" element={<TimoumiProjectPage />} />
        <Route path="/freelance-projects/ah-auto-detailing" element={<AhProjectPage />} />
        <Route path="/freelance-projects/13-rue-de-la-mode" element={<RueDeLaModeProjectPage />} />
        <Route path="/freelance-projects/rebellion-live-band" element={<RebellionProjectPage />} />
        <Route path="/professional-projects" element={<ProfessionalProjectsPage />} />
        <Route path="/professional-projects/rivezli" element={<RivezliProjectPage />} />
        <Route path="/associative-projects" element={<AssociativeProjectsPage />} />
        <Route path="/associative-projects/enactus-epi-sousse" element={<EnactusProjectPage />} />
        <Route path="/associative-projects/gaming-freaks" element={<GamingFreaksProjectPage />} />
        <Route path="/associative-projects/cao" element={<CaoProjectPage />} />
        <Route path="/associative-projects/ieee" element={<IeeeProjectPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
