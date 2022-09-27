import { useEffect, useState } from 'react';
import SellerOrdersContainer from '../assets/styles/SellerOrders';

function SellerOrders() {
  const [orders, setOrders] = useState();

  async function getOrders() {
    const arrayOrders = await test();
    setOrders(arrayOrders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SellerOrdersContainer>
      { orders && orders.map((order) => (
        <span key={ order.id }>{order.status}</span>
      )) }
    </SellerOrdersContainer>
  );
}

export default SellerOrders;
