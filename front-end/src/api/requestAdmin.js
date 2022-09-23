const endpoint = 'http://localhost:3001/admin/manage';

async function requestAdmin(userData) {
  try {
    const response = await fetch(endpoint, {
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

export async function getUsers() {
  try {
    const response = await fetch(endpoint);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUsers(id) {
  try {
    await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log('Erro ao deletar usuário', error);
  }
}

export default requestAdmin;
