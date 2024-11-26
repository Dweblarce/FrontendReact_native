import React, { useState, useContext } from 'react';
import { Button, TextInput } from 'react-native';
import { AuthContext } from './context/AuthContext';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  };

  return (
    // ... (tu formulario de login)
  );
};