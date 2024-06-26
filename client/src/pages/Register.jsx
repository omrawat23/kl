import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e9e8e4;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #e9e8e4;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;