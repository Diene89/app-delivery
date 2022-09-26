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

    const { status } = response;

    const data = await response.json();

    return { data, status };
  } catch (error) {
    console.log('Algo deu errado ao tentar finalizar a compra', error);
  }
}

export default requestCompleteCheckout;
