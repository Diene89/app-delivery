import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderById, updateOrder } from '../api/requestSeller';
import OrderTable from '../components/OrderTable';
import Navbar from '../components/Navbar';
import SellerOrderDetailsContainer from '../assets/styles/SellerOrderDetails';

function SellerOrderDetails() {
  const test = 'seller_order_details__element-order-details-label-delivery-status';
  const [order, setOrder] = useState();
  const [requestStatus, setRequestStatus] = useState();
  const { id } = useParams();

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
      <SellerOrderDetailsContainer statusColor={ order && order.status }>
        { order && (
          <div className="order_details_container">
            <div className="order_details_status">
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
                className="order_status"
                data-testid={ test }
              >
                { order.status }
              </span>
            </div>

            <div className="order_details_button_container">
              <button
                className="order_details_button_preparing"
                type="button"
                disabled={ order.status !== 'Pendente' }
                data-testid="seller_order_details__button-preparing-check"
                onClick={ () => {
                  updateStatus(order.status);
                } }
              >
                Preparar pedido
              </button>
              <button
                className="order_details_button_dispatch"
                disabled={ order.status !== 'Preparando' }
                data-testid="seller_order_details__button-dispatch-check"
                type="button"
                onClick={ () => {
                  updateStatus(order.status);
                } }
              >
                Saiu para entrega
              </button>
            </div>
          </div>
        )}
        { order && <OrderTable order={ order } /> }
      </SellerOrderDetailsContainer>
    </>
  );
}

export default SellerOrderDetails;
