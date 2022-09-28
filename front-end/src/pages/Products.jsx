import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerProducts from '../assets/styles/Products';
import Navbar from '../components/Navbar';
import requestProducts from '../api/requestProducts';
import ProductsCard from '../components/ProductsCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const getProducts = async () => {
    const data = await requestProducts();
    setProducts(data);
  };

  function navigateTo(path) {
    navigate(path);
  }

  const totalPrice = async () => {
    const cartInfo = await JSON.parse(localStorage.getItem('user'));
    let tempTotal = 0;
    cartInfo.productCart.forEach((item) => {
      tempTotal += (item.quantity * item.price);
    });
    setTotal(tempTotal);
  };

  useEffect(() => {
    getProducts();
    async function userData() {
      const userInfo = await JSON.parse(localStorage.getItem('user'));
      if (!userInfo.token) navigateTo('/login');
    }
    userData();
  }, []);

  const userCartData = async (objData) => {
    const { name, price, quantity, id } = objData;
    const userInfo = await JSON.parse(localStorage.getItem('user'));
    const newitem = {
      name: userInfo.name,
      email: userInfo.email,
      token: userInfo.token,
      role: userInfo.role,
      productCart: [
        ...userInfo.productCart,
        {
          name,
          price,
          quantity,
          id,
        },
      ],
    };
    const checkData = userInfo.productCart
      .filter((element) => element.name === name).length;
    if (checkData === 0) {
      localStorage.setItem('user', JSON.stringify(
        {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          token: userInfo.token,
          role: userInfo.role,
          productCart: newitem.productCart,
        },
      ));
      totalPrice();
    } else {
      const newCartData = userInfo.productCart.map((item) => (
        item.name === name ? { name, price, quantity, id } : item
      ));
      localStorage.setItem('user', JSON.stringify(
        {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          token: userInfo.token,
          role: userInfo.role,
          productCart: newCartData,
        },
      ));
      totalPrice();
    }

    if (quantity === 0) {
      const cartQuantity = await JSON.parse(localStorage.getItem('user'));
      const checkQuantity = cartQuantity.productCart
        .filter((cartItem) => cartItem.quantity !== 0);
      localStorage.setItem('user', JSON.stringify(
        {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          token: userInfo.token,
          role: userInfo.role,
          productCart: checkQuantity,
        },
      ));
      totalPrice();
    }
  };

  return (
    <>
      <Navbar />
      <ContainerProducts>
        <div className="products-section">
          {
            products.length > 0
              ? products.map(({ name, price, urlImage, id }, index) => (
                <ProductsCard
                  count={ index + 1 }
                  key={ index }
                  name={ name }
                  price={ price }
                  urlImage={ urlImage }
                  id={ id }
                  userCartData={ userCartData }
                />
              )) : ''
          }
        </div>
        <button
          type="button"
          className="total-button"
          data-testid="customer_products__button-cart"
          onClick={ () => navigateTo('/customer/checkout') }
          disabled={ total === 0 }
        >
          <span data-testid="customer_products__checkout-bottom-value">
            { total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
          </span>
        </button>
      </ContainerProducts>
    </>
  );
}

export default Products;
