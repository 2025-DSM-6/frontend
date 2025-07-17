import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 600px;
  height: 550px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 0px 20px 0px rgba(181, 181, 181, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  & > form {
    width: 80%;
  }
`;

export const Title = styled.h1`
  color: #2f7a4d;
  margin-bottom: 32px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  color: #9f9f9f;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 8px;
`;

export const Input = styled.input`
  color: #9f9f9f;
  border-radius: 10px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  padding: 10px;
`;

export const Button = styled.button`
  width: 80%;
  padding: 12px;
  border-radius: 10px;
  background-color: #15c65b;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
