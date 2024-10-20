'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js specific

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration logic here
    router.push('/home'); // Redirect to home page after successful registration
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '360px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Create a new account</h1>
        

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            type="email"
            placeholder="Email address"
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
            placeholder="New password"
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
              backgroundColor: '#3A6D8C',
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
