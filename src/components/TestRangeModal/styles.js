import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const TestRangeModalContainer = styled.div`
  width: 560px;
  background-color: #ffffff;
  padding: 28px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const RowInputs = styled.div`
  display: flex;
  column-gap: 32px;
  width: 100%;
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  padding: 8px;
  text-align: left;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  padding: 8px;
  resize: none;
  text-align: left;
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background-color: #15C65B;
  border: none;
  border-radius: 16px;
  padding: 14px 36px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
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