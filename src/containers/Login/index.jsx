import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import { useUser } from '../../hooks/UseContext'
import api from "../../services/api.jsx"
import Button from "../../components/Button"
import { 
  Container, 
  ImageLogin, 
  ContainerLogin,
  Logo,
  H2, 
  Label, 
  Input, 
  SingUpLink, 
  ErrorMessage 
} from "./styles";
import imageLogin from "../../assets/home.jpg"

function Login() {
  const { putUserData } = useUser()

  // Validando email e senha
  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos")
  })

  const { 
    register, 
    handleSubmit, 
    formState:{ errors } 
  } = useForm({
    resolver: yupResolver(schema)
  });

  // Conectando com o backend quando o usuario clica no botão de login
  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a) 👌',
        error: 'Verifique seu e-mail ou senha 🤯'
      }
    ) 

    putUserData(data)

  }

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

          <Button type="submit" style={{marginTop: '6rem'}}>Entrar</Button>
        </form>

        <SingUpLink>Não possui conta? <Link to='/cadastro'>Sing up</Link></SingUpLink>
      </ContainerLogin>
    </Container>
  )
}

export default Login