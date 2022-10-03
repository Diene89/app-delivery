import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import requestOrders from '../api/requestCustomer';
import ContainerOrders from '../assets/styles/Orders';
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
    <ContainerOrders>
      <Navbar />

      <div className="orders-cards-container">
        {orders.message && <p>{orders.message}</p>}

        {!orders.message && (
          orders.map((item, index) => (
            <OrdersCard
              id={ item.id }
              status={ item.status }
              totalPrice={ item.totalPrice }
              saleDate={ item.saleDate }
              key={ `${item.id}__${index}` }
            />
          ))
        )}
      </div>
    </ContainerOrders>
  );
}

export default Orders;
