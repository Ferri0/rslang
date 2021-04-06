const register = async (
  name: string,
  email: string,
  pass: string
): Promise<Response> => {
  const data = {
    name,
    email,
    password: pass,
  };
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
  return response;
};

const login = async (email: string, password: string): Promise<Response> => {
  const data = {
    email,
    password,
  };
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
