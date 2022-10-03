const requestOrdersDetails = async (token, id) => {
  try {
    const response = await fetch(`http://localhost:3001/customer/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default requestOrdersDetails;
