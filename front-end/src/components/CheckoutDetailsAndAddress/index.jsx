import CheckoutSelect from '../CheckoutDetailsSelect';
import ContainerDetailsAndAddress from './style';

function CheckoutDetailsAndAddress() {
  const mockedSellers = ['Denis', 'Didi', 'Tiemi', 'Alexandre', 'Matheus'];

  return (
    <ContainerDetailsAndAddress>
      <h2 className="checkout-details-title">Detalhes e Endereço para Entrega</h2>

      <div className="checkout-details-container">
        <div className="checkout-details-options-container">
          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">P. Vendedora Responsável:</span>

            <CheckoutSelect sellers={ mockedSellers } />
          </div>

          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">Endereço</span>

            <input
              className="checkout-detailts-input"
              data-testid="customer_checkout__input-address"
              type="text"
              placeholder="Digite seu endereço"
            />
          </div>

          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">Número</span>

            <input
              className="checkout-detailts-input"
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              placeholder="Número do seu endereço"
            />
          </div>
        </div>

        <div className="checkout-details-finish-button-container">
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
          >
            <span>FINALIZAR PEDIDO</span>
          </button>
        </div>
      </div>
    </ContainerDetailsAndAddress>
  );
}

export default CheckoutDetailsAndAddress;
