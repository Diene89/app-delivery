import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestCompleteCheckout from '../../api/requestCompleteCheckout';
import requestSellers from '../../api/requestSellers';
import CheckoutSelect from '../CheckoutDetailsSelect';
import ContainerDetailsAndAddress from './style';

function CheckoutDetailsAndAddress() {
  const [sellersInfos, setSellersInfo] = useState([]);
  const [sellerId, setSellerId] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const sellers = await requestSellers() || [];

      setSellersInfo(sellers);
    })();
  }, []);

  const handleSeller = (target) => {
    const seller = target.value;

    setSellerId(seller);
  };

  const handleAddress = (target) => {
    const address = target.value;

    setDeliveryAddress(address);
  };

  const handleAddressNumber = (target) => {
    const addressNumber = target.value;

    setDeliveryNumber(addressNumber);
  };

  const handleCompleteCheckout = async () => {
    const statusSuccessCode = 201;
    const {
      productCart,
      token,
      totalPrice,
    } = JSON.parse(localStorage.getItem('user'));

    const userData = {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productCart,
    };

    const {
      data, status,
    } = await requestCompleteCheckout(userData, token);

    if (status === statusSuccessCode) {
      return navigate(`/customer/orders/${data.id}`);
    }
  };

  return (
    <ContainerDetailsAndAddress>
      <h2 className="checkout-details-title">Detalhes e Endereço para Entrega</h2>

      <div className="checkout-details-container">
        <div className="checkout-details-options-container">
          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">P. Vendedora Responsável:</span>

            <CheckoutSelect sellers={ sellersInfos } handleSeller={ handleSeller } />
          </div>

          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">Endereço</span>

            <input
              className="checkout-detailts-input"
              data-testid="customer_checkout__input-address"
              type="text"
              placeholder="Digite seu endereço"
              onChange={ ({ target }) => handleAddress(target) }
            />
          </div>

          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">Número</span>

            <input
              className="checkout-detailts-input"
              data-testid="customer_checkout__input-address-number"
              type="text"
              placeholder="Número do seu endereço"
              onChange={ ({ target }) => handleAddressNumber(target) }
            />
          </div>
        </div>

        <div className="checkout-details-finish-button-container">
          <button
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleCompleteCheckout }
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
