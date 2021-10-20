const login = async () => {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/login`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default login;
