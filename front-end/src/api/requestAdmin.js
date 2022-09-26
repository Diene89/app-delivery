const endpoint = 'http://localhost:3001/admin/manage';

async function requestAdmin(userData, token) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const data = response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar realizar o cadastro do usuário', error);
  }
}

export async function getUsers(token) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: token,
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUsers(id, token) {
  try {
    await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
      Authorization: token,
    });
  } catch (error) {
    console.log('Erro ao deletar usuário', error);
  }
}

export default requestAdmin;
