const register = async (name: string, email: string, pass: string) => {
  const data = {
    name,
    email,
    password: pass,
  };
  // let result = 'error';
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
  // if (response.ok) {
  //   result = 'ok';
  // } else {
  //   response.text().then((res) => {
  //     result = res;
  //   });
  // }
  return response;
};

const login = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };
  let result = 'error';
  const response = await fetch(
    'https://yaia-team-rslang-api.herokuapp.com/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export { register, login };
