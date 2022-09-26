import PropTypes from 'prop-types';
import ContainerCheckoutSelect from './style';

function CheckoutSelect({ sellers }) {
  return (
    <ContainerCheckoutSelect
      className="checkout-detailts-input"
      data-testid="customer_checkout__select-seller"
      defaultValue="selecione"
    >
      <option value="selecione" selected disabled>Selecione</option>

      {sellers.map(({ name, id }, index) => {
        const keyId = `${name}__${id}__${index}`;

        return <option key={ keyId } value={ id }>{name}</option>;
      })}
    </ContainerCheckoutSelect>
  );
}

CheckoutSelect.propTypes = {
  sellers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CheckoutSelect;
