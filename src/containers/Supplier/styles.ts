import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #fff;
  flex: 1;
`;

export const Infos = styled.View`
  margin-top: 16px;
`;

export const Title = styled.Text`
  color: #ff6b00;
  font-size: 18px;
  font-weight: 700;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #a1a1a1;
  font-weight: 500;
  margin-top: 20px;
`;

export const BoxTags = styled.View`
  flex-direction: row;
  margin: 35px 0;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Orders = styled.View`
  margin-top: 10px;
`;

export const Order = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #dcdbdb;
`;

export const Status = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #000aff;
`;

export const OrderNumber = styled.Text`
  color: #78c800;
  font-size: 14px;
  font-weight: 500;
  margin: 0 9px 0 23px;
`;

export const OrderInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  color: #bbb;
  font-size: 14px;
  font-weight: 500;
  max-width: 150px;
`;

export const Value = styled.Text`
  color: #78c800;
  font-size: 14px;
  font-weight: 500;
`;

export const SectionTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`;
