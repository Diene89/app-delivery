import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
