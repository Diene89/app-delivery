import { useEffect, useState } from 'react';
import requestCompleteCheckout from '../../api/requestCompleteCheckout';
import requestSellers from '../../api/requestSellers';
import CheckoutSelect from '../CheckoutDetailsSelect';
import ContainerDetailsAndAddress from './style';

function CheckoutDetailsAndAddress() {
  const mockedSellers = [
    { name: 'Denis', id: 1 },
    { name: 'Didi', id: 2 },
    { name: 'Tiemi', id: 3 },
    { name: 'Alexandre', id: 4 },
    { name: 'Matheus', id: 5 },
  ];
  const mockedTotalPrice = 28.46;

  const [sellersInfos, setSellersInfo] = useState([]);
  const [sellerSelected, setSellerSelected] = useState({});
  const [userAddress, setUserAddress] = useState('');
  const [userAddressNumber, setUserAddressNumber] = useState('');

  useEffect(() => {
    (async () => {
      const sellers = await requestSellers() || mockedSellers;

      setSellersInfo(sellers);
    })();
  }, []);

  const handleSeller = (target) => {
    const seller = target.value;

    setSellerSelected(seller);
  };

  const handleAddress = (target) => {
    const address = target.value;

    setUserAddress(address);
  };

  const handleAddressNumber = (target) => {
    const addressNumber = target.value;

    setUserAddressNumber(addressNumber);
  };

  const handleCompleteCheckout = async () => {
    const { shopCart, token } = localStorage.getItem('user');
    const { id: sellerId } = sellerSelected;

    const userData = {
      sellerId,
      mockedTotalPrice,
      userAddress,
      userAddressNumber,
      shopCart,
    };

    const checkCheckout = requestCompleteCheckout(userData, token);

    return checkCheckout;
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
              onChange={ (target) => handleAddress(target) }
            />
          </div>

          <div className="checkout-details-option">
            <span className="checkout-details-subtitle">Número</span>

            <input
              className="checkout-detailts-input"
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              placeholder="Número do seu endereço"
              onChange={ (target) => handleAddressNumber(target) }
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
