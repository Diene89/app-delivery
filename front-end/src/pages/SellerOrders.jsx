import { useEffect, useState } from 'react';
import SellerOrdersContainer from '../assets/styles/SellerOrders';
import { getSellerOrders } from '../api/requestSeller';

function SellerOrders() {
  const [orders, setOrders] = useState(['test']);

  async function getOrders() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const arrayOrders = await getSellerOrders(token);
    console.log(arrayOrders);
    setOrders(arrayOrders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <SellerOrdersContainer>
      { orders && orders.map((order) => (
        <div key={ order.id }>
          <span
            data-testid={ `seller_orders__element-order-id-${order.id}` }
          >
            { order.id }
          </span>
          <span
            data-testid={ `seller_orders__element-delivery-status-${order.id}` }
          >
            { order.status }
          </span>
          <span
            data-testid={ `seller_orders__element-order-date-${order.id}` }
          >
            { order.saleDate }
          </span>
          <span
            data-testid={ `seller_orders__element-card-price-${order.id}` }
          >
            { order.totalPrice }
          </span>
          <span
            data-testid={ `seller_orders__element-card-address-${order.id}` }
          >
            { `${order.deliveryAddress}, ${order.deliveryNumber}` }
          </span>
        </div>
      )) }
    </SellerOrdersContainer>
  );
}

export default SellerOrders;
