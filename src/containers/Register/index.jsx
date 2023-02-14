import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { toast } from 'react-toastify';

import api from "../../services/api.jsx"
import Button from "../../components/Button"
import { Container, ImageRegister, ContainerLogin, Logo, H2, Label, Input, SingUpLink, ErrorMessage } from "./styles";
import imgRegister from "../../assets/register.jpg"

function Register() {
  // Validando email e senha
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    password: Yup.string().required("A senha é obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos"),
    confirmPassword: Yup.string().required("A senha é obrigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
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
    try{
      const {status} = await api.post("users", {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        }, 
        {
          validateStatus: () => true
        }
      )
      if(status === 201 || status === 200){
        toast.success('Cadastro criado com sucesso!')
      } else if(status === 409){
        toast.error('E-mail já cadastrado! Faça o login para continuar')
      } else {
        throw new error
      }
    }catch(err){
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <ImageRegister src={imgRegister} alt="Imagem de login" />
      
      <ContainerLogin>
        <Logo>Food<span>Fleet</span></Logo>

        <H2>Cadastre-se</H2>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
 
          <div className="inputs">
            <Label errors={errors.name?.message}>Nome</Label>
            <Input type="text" placeholder="Digite seu nome" {...register("name")} errors={errors.name?.message}/>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>

          <div className="inputs">
            <Label errors={errors.email?.message}>Email</Label>
            <Input type="email" placeholder="Digite seu email" {...register("email")} errors={errors.email?.message}/>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>

          <div className="inputs">
            <Label errors={errors.email?.message}>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" {...register("password")} errors={errors.email?.message}/>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>

          <div className="inputs">
            <Label errors={errors.confirmPassword?.message}>Comfirmar Senha</Label>
            <Input type="password" placeholder="Comfirme sua senha" {...register("confirmPassword")} errors={errors.confirmPassword?.message}/>
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </div>

          <Button type="submit" style={{marginTop: '4rem'}}>Cadastrar</Button>
        </form>

        <SingUpLink>Já possui conta? <a href="#">Sing in</a></SingUpLink>
      </ContainerLogin>
    </Container>
  )
}

export default Register