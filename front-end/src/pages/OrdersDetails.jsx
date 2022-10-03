import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requestOrdersDetails from '../api/requestOrdersDetails';
import ContainerOrdersDetails from '../assets/styles/OrdersDetails';
import Navbar from '../components/Navbar';
import OrdersSection from '../components/OrdersSection';
import OrderDetailsTable from '../components/OrderDetailsTable';

function OrderDetail() {
  const [orderDetails, setOrderDetails] = useState();
  const [haveProducts, setHaveProducts] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { id } = useParams();

  const getOrderById = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const order = await requestOrdersDetails(token, id);

    setOrderDetails(order);
  };

  useEffect(() => {
    getOrderById();
  }, []);

  useEffect(() => {
    if (orderDetails && orderDetails.products) {
      const { products } = orderDetails;
      const sum = products.reduce((acc, current) => {
        const { quantity } = current.salesProducts;

        return acc + Number(current.price) * quantity;
      }, 0);

      setTotalPrice(sum);
      setHaveProducts(true);
    }
  }, [orderDetails]);

  function renderTotalPrice() {
    return (
      <div className="order-details-totalprice">
        <span>
          Total: R$
          <span data-testid="customer_order_details__element-order-total-price">
            { totalPrice.toLocaleString(
              'pt-BR',
              { minimumFractionDigits: 2, maximumFractionDigits: 2 },
            ) }
          </span>
        </span>
      </div>
    );
  }

  return (
    <ContainerOrdersDetails>
      <Navbar />

      <div className="order-details-body">
        <h2 className="order-details-title">Detalhe do Pedido</h2>

        <div className="order-details-infos-and-items-container">
          <div>
            {haveProducts && <OrdersSection order={ orderDetails } />}
          </div>

          <div className="order-details-table-container">
            {haveProducts && (
              <OrderDetailsTable items={ orderDetails.products } />
            )}

          </div>

          {renderTotalPrice()}
        </div>
      </div>
    </ContainerOrdersDetails>
  );
}

export default OrderDetail;
