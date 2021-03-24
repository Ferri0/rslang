const register = async (name, email, pass) => {
  const data = {
    name,
    email,
    password: pass,
  };
  let result = 'error';
  const response = await fetch(
    'https://yaia-team-rslang-api.herokuapp.com/users',
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    result = 'ok';
  } else {
    response.text().then((res) => {
      result = res;
    });
  }
  return result;
};

export { register };
