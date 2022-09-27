import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById, updateOrder } from '../api/requestSeller';
import OrderTable from '../components/OrderTable';

function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [disablePreparing, setDisablePreparing] = useState(false);
  const [disableDispatch, setDisableDispatch] = useState(true);
  const { id } = useParams();

  async function getOrderById() {
    const orderCustomer = await getSellerOrderById(id);
    setOrder(orderCustomer);
  }

  async function updateStatus(status) {
    if (status === 'preparing') {
      setDisablePreparing(true);
      setDisableDispatch(false);
      updateOrder(id, 'Preparando');
    }
    if (status === 'dispatch') {
      setDisableDispatch(true);
      updateOrder(id, 'Em Trânsito');
    }
  }

  function formatDate() {
    const { saleDate } = order;
    const ano = saleDate.split('-')[0];
    const mes = saleDate.split('-')[1];
    const diaHora = saleDate.split('-')[2];
    const dia = diaHora.split('T')[0];
    const data = `${dia}/${mes}/${ano}`;

    return data;
  }

  useEffect(() => {
    getOrderById();
  }, [disablePreparing, disableDispatch]);

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
            { formatDate() }
          </span>
          <span
            data-testid={ `
            seller_order_details__element-order-details-label-delivery-status` }
          >
            { order.status }
          </span>
          <button
            type="button"
            disabled={ disablePreparing }
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => updateStatus('preparing') }
          >
            Preparar pedido
          </button>
          <button
            disabled={ disableDispatch }
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            onClick={ () => updateStatus('dispatch') }
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
