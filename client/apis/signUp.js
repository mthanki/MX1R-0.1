const signUp = async (username, password, matchPassword) => {
  const fetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, matchPassword }),
    credentials: 'include',
  };
  return await fetch(`auth/signup`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default signUp;
