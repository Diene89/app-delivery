async function requestAdmin(userData) {
  try {
    const response = await fetch('http://localhost:3001/admin/manage', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar realizar o cadastro do usuário', error);
  }
}

export default requestAdmin;
