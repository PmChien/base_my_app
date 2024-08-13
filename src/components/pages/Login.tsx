import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const error = useSelector(state => state.auth.error);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // dispatch(login({ username, password })).then(() => {
    //   navigate('/home');
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}

export default Login;
