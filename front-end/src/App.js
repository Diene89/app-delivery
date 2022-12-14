import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Admin from './pages/Admin';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrdersDetails from './pages/OrdersDetails';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/admin/manage" element={ <Admin /> } />
        <Route exact path="/seller/orders/" element={ <SellerOrders /> } />
        <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/customer/orders/:id" element={ <OrdersDetails /> } />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
