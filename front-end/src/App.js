import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
