import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';
import OAuth from 'components/OAuth';
import styled from '@emotion/styled';

let socket;
const apiEndpoint = 'http://localhost:3001';
const providers = [/* 'twitter', 'google', 'facebook', */ 'github'];

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Input = styled.input`
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #f8f9fa;
  border: 1px solid #f2f2f2;
  border-radius: 7px;
  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #228be6;
  border: 1px solid #228be6;
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 7px;
  &:focus {
    outline: 0;
  }
`;

function Login() {
  const [status, setStatus] = useState({ on: false, error: null });

  useEffect(() => {
    socket = io(apiEndpoint);
    socket.on('connect', () => {
      setStatus((s) => {
        return { ...s, on: true };
      });
    });
    socket.on('connect_error', () => {
      setStatus((s) => {
        return { ...s, error: 'connect error!!!' };
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Input type="email" name="email" />
        <Button type="submit" name="login">
          bắt đầu
        </Button>
      </LoginForm>
      {status.on &&
        providers.map((provider) => (
          <OAuth provider={provider} key={provider} socket={socket} />
        ))}
    </LoginWrapper>
  );
}

export default Login;
