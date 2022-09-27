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

    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
