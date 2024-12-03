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
import ActionsListPage from './pages/ListPage';

const App = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (!store.isAuth) {
    return <LoginPage />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/actions" element={<ActionsListPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default observer(App);
