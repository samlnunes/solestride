import styled from "styled-components/native";

export const TextInputCustom = styled.TextInput`
  background-color: transparent;
  min-width: 80%;
  border-radius: 8px;
  padding: 0 15px;
  height: 40px;
  border-width: 1px;
  border-color: #d5dbd6;
  color: ${(props) => props.theme.color};
`;
