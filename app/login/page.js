'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js specific

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
    router.push('/home'); // Redirect to home page on successful login
  };

  const handleCreateAccount = () => {
    router.push('/register'); // Navigate to the register page
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', maxWidth: '900px', width: '100%' }}>
        {/* Left side - Facebook branding */}
        <div style={{ flex: 1, padding: '20px' }}>
          
        </div>

        {/* Right side - Login form */}
        <div style={{ width: '360px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="email"
              placeholder="Email address or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '90%',
                padding: '14px',
                border: '1px solid #dddfe2',
                borderRadius: '6px',
                fontSize: '16px'
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '90%',
                padding: '14px',
                border: '1px solid #dddfe2',
                borderRadius: '6px',
                fontSize: '16px'
              }}
              required
            />
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#001F3F',
                color: '#fff',
                padding: '14px',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: 'none',
                textAlign: 'center',
                marginTop: '10px'
              }}
            >
              Log in
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <a href="#" style={{ color: '#1877f2', fontSize: '14px', textDecoration: 'none' }}>
              Forgotten password?
            </a>
          </div>

          <hr style={{ margin: '20px 0' }} />

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleCreateAccount}
              style={{
                width: '100%',
                backgroundColor: '#3A6D8C',
                color: '#fff',
                padding: '14px',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: 'none',
                textAlign: 'center'
              }}
            >
              Create new account
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#606770' }}>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
