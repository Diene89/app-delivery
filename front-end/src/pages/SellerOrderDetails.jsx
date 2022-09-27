import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById } from '../api/requestSeller';
import OrderTable from '../components/OrderTable';

function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const { id } = useParams();

  async function getOrderById() {
    const orderCustomer = await getSellerOrderById(id);
    setOrder(orderCustomer);
    console.log(order);
  }

  useEffect(() => {
    getOrderById();
  }, []);

  return (
    <>
      <h1>Detalhe do pedido</h1>
      { order && (
        <div>
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            { order.id }
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { order.saleDate }
          </span>
          <span
            data-testid={ `
            seller_order_details__element-order-details-label-delivery-status` }
          >
            { order.status }
          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
          >
            Saiu para entrega
          </button>
        </div>
      )}
      { order && <OrderTable order={ order } /> }
    </>
  );
}

export default SellerOrderDetails;
