async function requestVoucher(voucher) {
  try {
    const response = await fetch('http://localhost:3001/voucher', {
      method: 'POST',
      body: JSON.stringify({ company: voucher }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Algo deu errado ao tentar aplicar o cupom', error);
  }
}

export default requestVoucher;
