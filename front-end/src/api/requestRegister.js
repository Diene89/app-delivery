async function requestRegister(userData) {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar realizar o cadastro do usuário', error);
  }
}

export default requestRegister;
