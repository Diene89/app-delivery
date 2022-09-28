const endpoint = 'http://localhost:3001/seller/orders';

export async function getSellerOrders(token) {
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

export async function getSellerOrderById(id) {
  try {
    const response = await fetch(`${endpoint}/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateOrder(id, status) {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
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
