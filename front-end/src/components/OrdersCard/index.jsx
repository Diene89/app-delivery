import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrdersCardContainer from './style';

function OrdersCard({ id, status, totalPrice, saleDate }) {
  const date = new Date(saleDate);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const saleFormat = new Intl.DateTimeFormat('pt-br', options).format(date);

  return (
    <OrdersCardContainer>
      <Link to={ `/customer/orders/${id}` }>

        <div data-testid={ `customer_orders__element-order-id-${id}` }>
          {`Pedido ${id}`}
        </div>
        <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </div>
        <div data-testid={ `customer_orders__element-order-date-${id}` }>
          {saleFormat}
        </div>
        <div data-testid={ `customer_orders__element-card-price-${id}` }>
          { Number(totalPrice)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
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
