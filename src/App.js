import Layout from './Layout';
import Footer from './components/footer/Footer';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Topbar />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </div>

  );
}

export default App;
