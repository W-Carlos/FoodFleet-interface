import React from "react";

import { Container, ImageLogin, ContainerLogin, Logo, H2, Label, Input, SingUpLink, Button } from "./styles";
import imageLogin from "../../assets/home.jpg"

function Login() {
  return (
    <Container>
      <ImageLogin src={imageLogin} alt="Imagem de login" />
      <ContainerLogin>
        <Logo>Food<span>Fleet</span></Logo>

        <H2>Login</H2>
    
        <div className="inputs">
          <Label>Email</Label>
          <Input type="email" placeholder="Digite seu email" />
        </div>

        <div className="inputs">
          <Label>Senha</Label>
          <Input type="password" placeholder="Digite sua senha" />
        </div>

        <Button>Entrar</Button>

        <SingUpLink>Não possui conta? <a href="#">Sing up</a></SingUpLink>
      </ContainerLogin>
    </Container>
  )
}

export default Login