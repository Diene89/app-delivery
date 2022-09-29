import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requestOrdersDetails from '../api/requestOrdersDetails';
import OrdersDetails from '../assets/styles/OrdersDetails';
import Navbar from '../components/Navbar';
import OrdersSection from '../components/OrdersSection';
import ProductDetailsCard from '../components/ProductDetailsCard';

function OrderDetail() {
  const { id } = useParams();

  const [ordersDetails, setOrdersDetails] = useState();

  const getOrderById = async () => {
    const { token } = await JSON.parse(localStorage.getItem('user'));
    const data = await requestOrdersDetails(token, id);
    setOrdersDetails(data);
  };

  useEffect(() => {
    getOrderById();
  }, []);

  return (
    <>
      <Navbar />
      <OrdersDetails>
        {ordersDetails && (<OrdersSection
          order={ ordersDetails }
        />)}
        <div>
          {
            ordersDetails && ordersDetails.products.map((item, index) => (
              <ProductDetailsCard
                order={ item }
                key={ index + 1 }
              />
            ))
          }
        </div>

        {
          ordersDetails && (
            <p
              data-testid="customer_order_details__element-order-total-price"
            >
              {`Total: ${ordersDetails.totalPrice}`}
            </p>)
        }
      </OrdersDetails>
    </>
  );
}

export default OrderDetail;
