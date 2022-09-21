const requestLogin = async (loginForm) => {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginForm),
  });
  return response;
};

export default requestLogin;
