import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import './index.css';
import './global.css'; // Импорт глобальных стилей
import Store from './store/index.ts';

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({
  store, 
})

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{store}}>
    <StrictMode>
    <App />
  </StrictMode>
  </Context.Provider>
  ,
);
