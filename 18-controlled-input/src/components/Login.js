import { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  };

  const handleInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
