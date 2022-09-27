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

  const totalPricee = async () => {
    const cartInfo = await JSON.parse(localStorage.getItem('userCart'));
    let tempTotal = 0;
    cartInfo.forEach((item) => {
      tempTotal += (item.quantity * item.price);
    });
    setTotal(tempTotal);
  };

  useEffect(() => {
    getProducts();
    localStorage.setItem('userCart', JSON.stringify([]));
    async function userData() {
      const userInfo = await JSON.parse(localStorage.getItem('user'));
      if (!userInfo.token) navigateTo('/login');
    }
    userData();
  }, []);

  const userCartData = async (objData) => {
    const { name, price, urlImage, quantity } = objData;
    const cartInfo = await JSON.parse(localStorage.getItem('userCart'));
    const newitem = {
      name,
      price,
      urlImage,
      quantity,
    };
    const checkData = cartInfo.filter((element) => element.name === name).length;
    if (checkData === 0) {
      localStorage.setItem('userCart', JSON.stringify([
        ...cartInfo,
        {
          ...newitem,
        },
      ]));
      totalPricee();
    } else {
      const newCartData = cartInfo.map((item) => (
        item.name === name ? { name, price, urlImage, quantity } : item
      ));
      localStorage.setItem('userCart', JSON.stringify(newCartData));
      totalPricee();
    }

    if (quantity === 0) {
      const cartQuantity = await JSON.parse(localStorage.getItem('userCart'));
      const checkQuantity = cartQuantity.filter((cartItem) => cartItem.quantity !== 0);
      localStorage.setItem('userCart', JSON.stringify(checkQuantity));
      totalPricee();
    }
  };

  return (
    <>
      <Navbar />
      <ContainerProducts>
        <div className="products-section">
          {
            products.length > 0
              ? products.map(({ name, price, urlImage }, index) => (
                <ProductsCard
                  count={ index + 1 }
                  key={ index }
                  name={ name }
                  price={ price }
                  urlImage={ urlImage }
                  userCartData={ userCartData }
                />
              )) : ''
          }
        </div>
        <button
          type="button"
          data-testid="customer_products__checkout-bottom-value"
          className="total-button"
          onClick={ () => navigateTo('/customer/checkout') }
        >
          { total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
        </button>
      </ContainerProducts>
    </>
  );
}

export default Products;
