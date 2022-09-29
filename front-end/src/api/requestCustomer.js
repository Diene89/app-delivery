const requestOrders = async (token) => {
  try {
    const response = await fetch('http://localhost:3001/customer/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
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

export async function updateOrder(id, status) {
  try {
    const response = await fetch(`http://localhost:3001/customer/orders/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default requestOrders;
