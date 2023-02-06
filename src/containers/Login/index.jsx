import React from "react";
import { useForm } from "react-hook-form";

import { Container, ImageLogin, ContainerLogin, Logo, H2, Label, Input, SingUpLink, Button } from "./styles";
import imageLogin from "../../assets/home.jpg"

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <ImageLogin src={imageLogin} alt="Imagem de login" />
      <ContainerLogin>
        <Logo>Food<span>Fleet</span></Logo>

        <H2>Login</H2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" {...register("email")}/>
          </div>

          <div className="inputs">
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" {...register("password")}/>
          </div>

          <Button type="submit">Entrar</Button>
        </form>

        <SingUpLink>Não possui conta? <a href="#">Sing up</a></SingUpLink>
      </ContainerLogin>
    </Container>
  )
}

export default Login