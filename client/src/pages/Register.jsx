import styled from "styled-components";
import { mobile } from "../responsive";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 1.2rem;
`
const GoToRegisterPage = styled.div`
  

`

const Register = () => {

  const [succes, setSucces] = useState(false);
  const [successMess, setSuccessMess] = useState('')

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

   
    let res = await axios.post ("http://localhost:5000/api/auth/register", {
        firstName,
        lastName,
        username,
        email,
        password,
      })

      let status = res.status;

      if (status === 201) {
        setSucces(true)
        setSuccessMess('You have successfuly registered!')
      }
    
      
    
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {succes && <SuccessMessage>{successMess}</SuccessMessage>}
        {succes && <Link to="/login">Login</Link>}
        <Form onSubmit={submitHandler}>
          <Input type="text" placeholder="first name" name="firstName" ref={firstNameRef} />
          <Input type="text" placeholder="last name" name="lastName" ref={lastNameRef} />
          <Input type="text" placeholder="username" name="username" ref={usernameRef}  />
          <Input type="email" placeholder="email"  name="email" ref={emailRef} />
          <Input type="password" placeholder="password" name="password" ref={passwordRef} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <GoToRegisterPage>You have an account? Go to <Link to="/login">Login</Link> page</GoToRegisterPage>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
