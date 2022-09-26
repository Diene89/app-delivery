async function requestSellers() {
  try {
    const response = await fetch('http://localhost:3001/sellers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar buscar todas pessoas vendedoras', error);
  }
}

export default requestSellers;
