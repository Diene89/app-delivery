import { useEffect, useState } from 'react';
import CheckoutTable from '../CheckoutTable';
import ContainerOrders from './style';

function CheckoutOrders() {
  const [userShopCart, setUserShopCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);

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

  const removeItem = (idToRemove) => {
    const userInfos = JSON.parse(localStorage.getItem('user'));

    const newCart = userShopCart.filter(({ id }) => Number(id) !== Number(idToRemove));
    const newLocalStorage = {
      ...userInfos,
      productCart: newCart,
    };

    localStorage.setItem('user', JSON.stringify(newLocalStorage));

    setUserShopCart(newCart);
  };

  return (
    <ContainerOrders>
      <h2 className="checkout-orders-title">Finalizar Pedido</h2>

      <div className="checkout-orders-container">
        <div className="checkout-orders-table-container">
          <CheckoutTable items={ userShopCart } removeItem={ removeItem } />
        </div>

        <div className="checkout-orders-amount-container">
          <div className="checkout-orders-amount">
            R$:&nbsp;
            <span data-testid="customer_checkout__element-order-total-price">
              {cartAmount.toLocaleString(
                'pt-BR',
                { minimumFractionDigits: 2, maximumFractionDigits: 2 },
              )}
            </span>
          </div>
        </div>
      </div>
    </ContainerOrders>
  );
}

export default CheckoutOrders;
