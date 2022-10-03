import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { updateOrder } from '../../api/requestCustomer';
import ProductDetailsContainer from './style';

function OrdersSection({ order }) {
  const { id, seller, saleDate, status } = order;
  const [syncStatus, setSyncStatus] = useState();
  const datatest = 'customer_order_details__element-order-details-label';

  const handleChangeStatus = async () => {
    await updateOrder(id, 'Entregue');

    setSyncStatus('Entregue');
  };

  function formatDate() {
    const date = new Date(saleDate);
    const dateOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const formatedDate = new Intl.DateTimeFormat('pt-br', dateOptions).format(date);

    return formatedDate;
  }

  function completeOrderId(orderId) {
    const MAX_ID_LENGTH = 3;
    const formats = {
      1: '000',
      2: '00',
      3: '0',
    };

    const orderIdLength = orderId.toLocaleString().length;
    const newOrderId = orderIdLength <= MAX_ID_LENGTH
      ? `${formats[orderIdLength]}${orderId}` : orderId;

    return newOrderId;
  }

  useEffect(() => {
    setSyncStatus(status);
  }, []);

  return (
    <ProductDetailsContainer>
      <div className="order-details-infos-container">
        <div className="order-details-infos-id-and-seller">
          <span
            className="order-details-infos-id"
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `PEDIDO ${completeOrderId(id)};`}
          </span>

          <span
            className="order-details-infos-name"
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${seller.name}`}
          </span>
        </div>

        <span
          className="order-details-infos-date"
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { formatDate() }
        </span>

        <span
          className={ syncStatus === 'Entregue'
            ? 'order-details-infos-status-complete' : 'order-details-infos-status' }
          data-testid={ `${datatest}-delivery-status` }
        >
          {syncStatus}
        </span>

        <button
          className="order-details-infos-btn"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ syncStatus !== 'Em Trânsito' || syncStatus === 'Entregue' }
          onClick={ handleChangeStatus }
          type="button"
        >
          {syncStatus === 'Entregue' ? 'PEDIDO ENTREGUE' : 'MARCAR COMO ENTREGUE'}
        </button>
      </div>
    </ProductDetailsContainer>
  );
}

OrdersSection.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    seller: PropTypes.string,
    saleDate: PropTypes.string,
  }),
}.isRequired;

export default OrdersSection;
