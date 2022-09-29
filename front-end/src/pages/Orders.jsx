import { useEffect, useState } from 'react';
import requestOrders from '../api/requestCustomer';
import Navbar from '../components/Navbar';
import OrdersCard from '../components/OrdersCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const { token } = await JSON.parse(localStorage.getItem('user'));
    const data = await requestOrders(token);
    setOrders(data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {
          orders.message ? (<p>{orders.message}</p>) : orders.map((item, index) => (
            <OrdersCard
              id={ item.id }
              status={ item.status }
              totalPrice={ item.totalPrice }
              saleDate={ item.saleDate }
              key={ index + 1 }
            />
          ))
        }
      </div>
    </>
  );
}

export default Orders;
