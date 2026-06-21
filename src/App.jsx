import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Home from './pages/home';
import ArticleDetail from './pages/articleDetails';
import ServicesContact from './pages/ServicesContact';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-geist">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulo/:slug" element={<ArticleDetail />} />
          <Route path="/servicios" element={<ServicesContact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
