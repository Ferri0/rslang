const addToDeleted = async (userId: string, wordId: string, token: string) => {
  const data = {
    difficulty: 'deleted',
    optional: {},
  };
  const response = await fetch(
    `https://yaia-team-rslang-api.herokuapp.com/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export { addToDeleted };
