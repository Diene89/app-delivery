import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerProducts from '../assets/styles/Products';
import Navbar from '../components/Navbar';
import requestProducts from '../api/requestProducts';
import ProductsCard from '../components/ProductsCard';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const data = await requestProducts();
    setProducts(data);
  };

  function navigateTo(path) {
    navigate(path);
  }

  useEffect(() => {
    getProducts();
    async function userData() {
      const userInfo = await JSON.parse(localStorage.getItem('user'));
      if (!userInfo.token) navigateTo('/login');
    }
    userData();
  }, []);

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
                  price={
                    price.toString().replace('.', ',')
                  }
                  urlImage={ urlImage }
                />
              )) : ''
          }
        </div>
      </ContainerProducts>
    </>
  );
}

export default Products;
