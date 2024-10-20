import React, { useState } from "react";
import { useHistory } from "react-router-dom";  // or useNavigate in React Router v6

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();  // For redirecting after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock login process (replace with API call)
    const loginSuccess = true;  // Replace with actual API response

    if (loginSuccess) {
      alert("Login successful! Redirecting to home...");
      history.push("/home");  // Redirect to home page after login
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
