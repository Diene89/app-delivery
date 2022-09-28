import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerOrdersContainer from '../assets/styles/SellerOrders';
import { getSellerOrders } from '../api/requestSeller';
import Navbar from '../components/Navbar';

function SellerOrders() {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();

  async function getOrders() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const arrayOrders = await getSellerOrders(token);
    setOrders(arrayOrders);
    console.log(arrayOrders);
  }

  function rediretToDetails(id) {
    navigate(`/seller/orders/${id}`);
  }

  function formatDate(data) {
    const ano = data.split('-')[0].split('0')[1];
    const mes = data.split('-')[1];
    const diaHora = data.split('-')[2];
    const dia = diaHora.split('T')[0];
    const formatedData = `${dia}/${mes}/${ano}`;

    return formatedData;
  }

  useEffect(() => {
    getOrders();
    console.log(orders);
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={ {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        } }
      >
        { orders && orders.map((order) => (
          <SellerOrdersContainer
            statusColor={ order.status }
            key={ order.id }
          >
            <button
              type="button"
              onClick={ () => rediretToDetails(order.id) }
            >
              <div className="order_container">
                <div className="order_price">
                  <span>Pedido</span>
                  <span
                    data-testid={ `seller_orders__element-order-id-${order.id}` }
                  >
                    { order.id }
                  </span>
                </div>

                <span
                  className="order_status"
                  data-testid={ `seller_orders__element-delivery-status-${order.id}` }
                >
                  { order.status }
                </span>
                <div className="order_price">
                  <span
                    data-testid={ `seller_orders__element-order-date-${order.id}` }
                  >
                    { order.saleDate && formatDate(order.saleDate) }
                  </span>
                  <span
                    data-testid={ `seller_orders__element-card-price-${order.id}` }
                  >
                    { `R$ ${order.totalPrice.toString().replace('.', ',')}` }
                  </span>
                </div>
              </div>

              <span
                className="order_address"
                data-testid={ `seller_orders__element-card-address-${order.id}` }
              >
                { `${order.deliveryAddress}, ${order.deliveryNumber}` }
              </span>
            </button>
          </SellerOrdersContainer>
        ))}
      </div>
    </>
  );
}

export default SellerOrders;
