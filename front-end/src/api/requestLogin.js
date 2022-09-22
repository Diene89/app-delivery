const requestLogin = async (loginForm) => {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginForm),
  });
  const data = await response.json();
  return data;
};

export default requestLogin;