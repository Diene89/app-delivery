import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrdersCardContainer from './style';

function OrdersCard({ id, status, totalPrice, saleDate }) {
  const date = new Date(saleDate);

  const options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };

  const saleFormat = new Intl.DateTimeFormat('pt-br', options).format(date);

  return (

    <OrdersCardContainer>
      <Link to={ `/customer/orders/${id}` }>

        <div data-testId={ `customer_orders__element-order-id-${id}` }>
          {`Pedido ${id}`}
        </div>
        <div data-testId={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </div>
        <div data-testId={ `customer_orders__element-order-date-${id}` }>
          {saleFormat}
        </div>
        <div data-testId={ `customer_orders__element-card-price-${id}` }>
          {totalPrice}
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
