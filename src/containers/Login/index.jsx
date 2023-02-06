import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { Container, ImageLogin, ContainerLogin, Logo, H2, Label, Input, SingUpLink, Button, ErrorMessage } from "./styles";
import imageLogin from "../../assets/home.jpg"

function Login() {
  // Validando email e senha
  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos")
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <ImageLogin src={imageLogin} alt="Imagem de login" />
      <ContainerLogin>
        <Logo>Food<span>Fleet</span></Logo>

        <H2>Login</H2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
 
          <div className="inputs">
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" {...register("email")} errors={errors.email?.message}/>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>

          <div className="inputs">
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" {...register("password")} errors={errors.email?.message}/>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>

          <Button type="submit">Entrar</Button>
        </form>

        <SingUpLink>Não possui conta? <a href="#">Sing up</a></SingUpLink>
      </ContainerLogin>
    </Container>
  )
}

export default Login