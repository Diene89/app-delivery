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
    const ano = saleDate.split('-')[0];
    const mes = saleDate.split('-')[1];
    const diaHora = saleDate.split('-')[2];
    const dia = diaHora.split('T')[0];
    const data = `${dia}/${mes}/${ano}`;

    return data;
  }

  useEffect(() => {
    setSyncStatus(status);
    console.log(status);
  }, []);

  return (
    <ProductDetailsContainer>
      <h1>
        Detalhe do Pedido
      </h1>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
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
          { formatDate() }
        </p>
        <p
          data-testid={ `${datatest}-delivery-status` }
        >
          {syncStatus}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ handleChangeStatus }
          disabled={ syncStatus !== 'Em Trânsito' }
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
