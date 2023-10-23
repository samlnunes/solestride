import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 81px;
`;

export const CustomButton = styled(TouchableOpacity)`
  background-color: #fff;
  width: 100%;
  height: 48px;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const BoxButtons = styled.View`
  width: 100%;
  gap: 21px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const FooterText = styled.Text`
  color: #fff;
  margin-top: 110px;
  text-align: center;
`;
