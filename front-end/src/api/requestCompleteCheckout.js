async function requestCompleteCheckout(userData, userToken) {
  try {
    const response = await fetch('http://localhost:3001/customer/checkout', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
    });

    const data = await response.json();

    console.log('sou o finalizar compra', data);

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar finalizar a compra', error);
  }
}

export default requestCompleteCheckout;
