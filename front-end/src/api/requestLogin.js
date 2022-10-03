const requestLogin = async (loginForm) => {
  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar realizar o login', error.message);
  }
};

export default requestLogin;
