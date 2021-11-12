const login = async (username, password) => {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
    // credentials: 'include',
  };
  return await fetch(`http://localhost:3000/auth/login`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default login;
