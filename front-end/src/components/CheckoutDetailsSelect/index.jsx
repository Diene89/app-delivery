import PropTypes from 'prop-types';
import ContainerCheckoutSelect from './style';

function CheckoutSelect({ sellers, handleSeller }) {
  return (
    <ContainerCheckoutSelect
      className="checkout-detailts-input"
      data-testid="customer_checkout__select-seller"
      defaultValue="selecione"
      onChange={ ({ target }) => handleSeller(target) }
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
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  handleSeller: PropTypes.func.isRequired,
};

export default CheckoutSelect;
