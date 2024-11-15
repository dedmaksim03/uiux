import Home from './pages/Home';
import Error from './pages/Error';
import { Header } from './components/Header';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import LoginPage from './pages/LoginPage';
import { useContext, useEffect } from 'react';
import { Context } from './main';
import { observer } from 'mobx-react-lite';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error />} /> */}
          <Route
            path="/*"
            element={
              <div>
                <h1> {store.isAuth ? `Авторизован ${localStorage.getItem('token')}` : 'Авторизуйтесь'}</h1>
                <LoginPage />
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default observer(App);
