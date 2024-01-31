import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username, password });
  };

  return (
    <div style={{}}>
      <h2>Login</h2>
      <div style={{ margin: 5 }}>
        <label />
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: 300, padding: 8 }}
        />
      </div>

      <div style={{ marginBlock: 25 }}>
        <input
          type='text'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: 300, padding: 8 }}
        />
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
