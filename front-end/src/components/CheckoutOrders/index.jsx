import { useEffect, useState } from 'react';
import requestVoucher from '../../api/requestVoucher';
import CheckoutTable from '../CheckoutTable';
import CheckoutOrdersContainer from './style';

function CheckoutOrders() {
  const [userShopCart, setUserShopCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [isVoucherInvalid, setIsVoucherInvalid] = useState(false);
  const [voucher, setVoucher] = useState(0);
  const [cartAmountWithVoucher, setCartAmountWithVoucher] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);

  useEffect(() => {
    const storagedCart = JSON.parse(localStorage.getItem('user'));

    if (storagedCart.productCart) {
      const { productCart } = storagedCart;
      setUserShopCart([...productCart]);
    }
  }, []);

  useEffect(() => {
    const sum = userShopCart.reduce((acc, current) => {
      const { price, quantity } = current;
      const tempSum = quantity * price;

      return acc + tempSum;
    }, 0);

    setCartAmount(sum);
  }, [userShopCart]);

  useEffect(() => {
    const userInfos = JSON.parse(localStorage.getItem('user'));
    const userWithNewAmount = {
      ...userInfos,
      totalPrice: cartAmount,
    };

    localStorage.setItem('user', JSON.stringify(userWithNewAmount));
  }, [cartAmount]);

  const removeItem = (event) => {
    const { id: idToRemove } = event.target;

    const userInfos = JSON.parse(localStorage.getItem('user'));

    const newCart = userShopCart.filter(({ id }) => Number(id) !== Number(idToRemove));
    const newLocalStorage = {
      ...userInfos,
      productCart: newCart,
    };

    localStorage.setItem('user', JSON.stringify(newLocalStorage));

    setUserShopCart(newCart);
  };

  async function handleApplyVoucher() {
    setIsVoucherInvalid(false);

    const checkVoucher = await requestVoucher(voucher);

    if (checkVoucher.message) {
      return setIsVoucherInvalid(true);
    }

    const amountDiscount = cartAmount * (checkVoucher.rebate / 100);

    const newAmount = cartAmount - amountDiscount;

    setCartAmountWithVoucher(newAmount);

    return setVoucherApplied(true);
  }

  return (
    <CheckoutOrdersContainer>
      <h2 className="checkout-orders-title">Finalizar Pedido</h2>

      <div className="checkout-orders-container">
        <div className="checkout-orders-table-container">
          <CheckoutTable items={ userShopCart } removeItem={ removeItem } />
        </div>

        <div className="checkout-orders-voucher-and-amount-container">
          <div className="checkout-orders-voucher">
            <input
              className="checkout-orders-voucher-input"
              placeholder="Digite seu cupom"
              onChange={ ({ target }) => {
                const voucherLowerCase = target.value.toLowerCase();

                setVoucher(voucherLowerCase);
              } }
              type="text"
            />

            <button
              className="checkout-orders-voucher-btn"
              onClick={ handleApplyVoucher }
              type="button"
            >
              Aplicar
            </button>

            {isVoucherInvalid && (
              <span className="checkout-orders-invalid-voucher">
                Cupom inválido
              </span>
            )}

          </div>

          {voucherApplied ? (
            <div className="checkout-orders-amount">
              Total: R$&nbsp;
              <span data-testid="customer_checkout__element-order-total-price">
                {cartAmountWithVoucher.toLocaleString(
                  'pt-BR',
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                )}
              </span>
            </div>
          ) : (
            <div className="checkout-orders-amount">
              Total: R$&nbsp;
              <span data-testid="customer_checkout__element-order-total-price">
                {cartAmount.toLocaleString(
                  'pt-BR',
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </CheckoutOrdersContainer>
  );
}

export default CheckoutOrders;
