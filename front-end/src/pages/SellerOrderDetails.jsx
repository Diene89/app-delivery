import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById, updateOrder } from '../api/requestSeller';
import OrderTable from '../components/OrderTable';
import Navbar from '../components/Navbar';

function SellerOrderDetails() {
  const test = 'seller_order_details__element-order-details-label-delivery-status';
  const [order, setOrder] = useState();
  const [disablePreparing, setDisablePreparing] = useState(false);
  const [disableDispatch, setDisableDispatch] = useState(true);
  const [requestStatus, setRequestStatus] = useState();
  const { id } = useParams();

  async function buttonDisable(status) {
    console.log(status);
    if (status === 'Preparando') {
      setDisablePreparing(true);
      setDisableDispatch(false);
    }
    if (status === 'Em Trânsito') {
      setDisablePreparing(true);
      setDisableDispatch(true);
    }
  }

  async function getOrderById() {
    const orderCustomer = await getSellerOrderById(id);
    setOrder(orderCustomer);
    buttonDisable(orderCustomer.status);
  }

  async function updateStatus(status) {
    if (status === 'Pendente') {
      await updateOrder(id, 'Preparando');
      setRequestStatus('preparing');
    }
    if (status === 'Preparando') {
      await updateOrder(id, 'Em Trânsito');
      setRequestStatus('dispatch');
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
  }, [requestStatus]);

  return (
    <>
      <Navbar />
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
            data-testid={ test }
          >
            { order.status }
          </span>
          <button
            type="button"
            disabled={ disablePreparing }
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => {
              updateStatus(order.status);
            } }
          >
            Preparar pedido
          </button>
          <button
            disabled={ disableDispatch }
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            onClick={ () => {
              updateStatus(order.status);
            } }
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
