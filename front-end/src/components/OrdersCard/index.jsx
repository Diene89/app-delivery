import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrdersCardContainer from './style';

function OrdersCard({ id, status, totalPrice, saleDate }) {
  function createDate() {
    const date = new Date(saleDate);

    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    const dateFormated = new Intl.DateTimeFormat('pt-br', options).format(date);

    return dateFormated;
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

    return <span>{newOrderId}</span>;
  }

  return (
    <OrdersCardContainer>
      <Link className="orders-order-card-link" to={ `/customer/orders/${id}` }>

        <div
          className="orders-order-card-order"
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          <span>Pedido</span>

          <span>{completeOrderId(id)}</span>
        </div>

        <div className="orders-order-card-status-date-amount">
          <div
            className="orders-order-card-status"
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            <span>{status}</span>
          </div>

          <div className="orders-order-card-date-and-amount">
            <div
              className="orders-order-card-date"
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              {createDate()}
            </div>

            <div
              className="orders-order-card-amount"
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              { Number(totalPrice)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
            </div>
          </div>
        </div>
      </Link>
    </OrdersCardContainer>
  );
}

OrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
};

export default OrdersCard;
