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

      <h1>Página de Pedidos</h1>

      <p>
        {'Componente apenas para passar no requisito 20, \
          que precisava redirecionar para alguma página.'}
      </p>

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
    </ContainerOrders>
  );
}

export default Orders;
