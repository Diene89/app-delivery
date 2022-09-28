import CheckoutOrders from '../components/CheckoutOrders';
import CheckoutDetailsAndAddress from '../components/CheckoutDetailsAndAddress';
import ContainerCheckout from '../assets/styles/Checkout';
import Navbar from '../components/Navbar';

function Checkout() {
  return (
    <ContainerCheckout>
      <Navbar />

      <CheckoutOrders />

      <CheckoutDetailsAndAddress />
    </ContainerCheckout>
  );
}

export default Checkout;
