import PropTypes from 'prop-types';
import { updateOrder } from '../../api/requestCustomer';
import ProductDetailsContainer from './style';

function OrdersSection({ order }) {
  const { id, seller, saleDate, status } = order;
  const datatest = 'customer_order_details__element-order-details-label-delivery-status';

  const handleChangeStatus = async () => {
    await updateOrder(id, 'Entregue');
  };

  return (
    <ProductDetailsContainer>
      <h1>
        Detalhe do Pedido
      </h1>
      <div>
        <p
          data-testid={
            `customer_order_details__element-order-details-label-order-id${id}`
          }
        >
          { `Pedido ${id}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${seller.name}`}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {saleDate}
        </p>
        <p
          data-testid={ datatest }
        >
          {status}
        </p>
        <button
          type="button"
          onClick={ handleChangeStatus }
          disabled={ status !== 'Em Trânsito' }
        >
          MARCAR COMO ENTREGUE
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
