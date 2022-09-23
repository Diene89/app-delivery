const requestProducts = async () => {
  try {
    const response = await fetch('http://localhost:3001/customer/products');
    if (!response.ok) {
      const message = `Erro: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default requestProducts;
