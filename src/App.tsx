import Home from './pages/Home';
import Error from './pages/Error';
import { Header } from './components/Header';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;