import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Footer from './components/footer/Footer';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import ErrorNotFound from './pages/error/ErrorNotFound';
import Experience from './pages/experience/Experience';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorNotFound />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
