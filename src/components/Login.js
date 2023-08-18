import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Front>
        <FrontImg src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get premier Access to Taylor's Version of 1989 with a Disney+
          subscription.{" "}
        </Description>
        <Logotwo src="/images/cta-logo-two.png" />
      </Front>
    </Container>
  );
}

export default Login;

const Logotwo = styled.img`
  width: 90%;
`;
const Description = styled.a`
  margin-bottom: 10px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const FrontImg = styled.img``;
const Front = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  position: relative;
  min-height: 100vh;
  &:before {
    opacity: 0.7;
    position: absolute;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
  }
`;
