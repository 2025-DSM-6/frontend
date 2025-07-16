import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 45%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const TextInput = styled.input`
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  font-size: 14px;
`;

export const SelectInput = styled.select`
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  appearance: none;
  background-color: white;
`;

export const RegistrationModalContainer = styled.div`
  width: 550px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 24px;
`;

export const InputSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 8px;
`;

export const SubmitButton = styled.button`
  background-color: #15c65b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: white;
  color: #666262;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;
