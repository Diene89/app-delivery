import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
