import { TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerLogin, Title, Button } from "./styles";

interface User {
  name: string;
  password: string;
}

export function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function handleLogin(event: FormEvent) {
    event.preventDefault()
    if(name && password){
      navigate('../catalog', { state: {nameUser: name}} );
    }
  }

  return (
    <ContainerLogin>
      <Title>Fake Login</Title>
      <form onSubmit={handleLogin} style={{display:'flex', flexDirection: "column", alignItems: 'center'}}>
        <TextField
          onChange={(event)=> setName(event.target.value)}
          label="User name"
          style={{ background: "#fff", margin: 5, borderRadius: 5 }}
        />
        <TextField
          onChange={(event)=> setPassword(event.target.value)}
          label="Password"
          type="password"
          style={{ background: "#fff", margin: 5, borderRadius: 5 }}
        />
        <Button type="submit" disabled={!name && !password}>Logar</Button>
      </form>
    </ContainerLogin>
  );
}
