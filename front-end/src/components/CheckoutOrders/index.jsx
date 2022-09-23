import CheckoutTable from '../CheckoutTable';
import ContainerOrders from './style';

const mockedItems = [
  {
    id: 1,
    description: 'Cerveja Stella 250ml',
    quantity: 3,
    price: 3.50,
  },
  {
    id: 2,
    description: 'Cerveja Skol Latão 450ml',
    quantity: 4,
    price: 4.10,
  },
  {
    id: 3,
    description: 'Salgadinho Torcida Churrasco',
    quantity: 1,
    price: 1.56,
  },
  {
    id: 1,
    description: 'Cerveja Stella 250ml3 Cerveja Stella 250ml3 Cerveja Stella 250ml3 Cerv',
    quantity: 3,
    price: 3.50,
  },
  {
    id: 2,
    description: 'Cerveja Skol Latão 450ml3',
    quantity: 4,
    price: 4.10,
  },
  {
    id: 3,
    description: 'Salgadinho Torcida Churrasco3',
    quantity: 1,
    price: 1.56,
  },
  {
    id: 1,
    description: 'Cerveja Stella 250ml2',
    quantity: 3,
    price: 3.50,
  },
  {
    id: 2,
    description: 'Cerveja Skol Latão 450ml2',
    quantity: 4,
    price: 4.10,
  },
  {
    id: 3,
    description: 'Salgadinho Torcida Churrasco2',
    quantity: 1,
    price: 1.56,
  },
  {
    id: 1,
    description: 'Cerveja Stella 250ml1',
    quantity: 3,
    price: 3.50,
  },
  {
    id: 2,
    description: 'Cerveja Skol Latão 450ml1',
    quantity: 4,
    price: 4.10,
  },
  {
    id: 3,
    description: 'Salgadinho Torcida Churrasco1',
    quantity: 1,
    price: 1.56,
  },
];

function CheckoutOrders() {
  const mockedPrice = 35.78;

  return (
    <ContainerOrders>
      <h2 className="checkout-orders-title">Finalizar Pedido</h2>

      <div className="checkout-orders-container">
        <div className="checkout-orders-table-container">
          <CheckoutTable items={ mockedItems } />
        </div>

        <div
          className="checkout-orders-amount"
          data-testid="customer_checkout__element-order-total-price"
        >
          <span>
            {`Total: ${
              mockedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }`}
          </span>
        </div>
      </div>
    </ContainerOrders>
  );
}

export default CheckoutOrders;
