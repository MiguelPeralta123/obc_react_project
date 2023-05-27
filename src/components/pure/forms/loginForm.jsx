import React, { useState } from 'react';

export const LoginForm = () => {

  const initialCredentials = [
    {
      user: '',
      password: ''
    }
  ]

  const [credentials, setCredentials] = useState(initialCredentials);

  return (
    <div>
      <h1>Login form</h1>
    </div>
  );
}