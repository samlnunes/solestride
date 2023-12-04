import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #fff;
  flex: 1;
`;

export const BoxSuppliers = styled.View`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
`;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 20px;
`;

export const ButtonMore = styled.TouchableOpacity``;

export const Supplier = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Position = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Abbreviation = styled.Text`
  font-size: 12px;
  color: #a1a1a1;
  font-weight: 500;
`;

export const Infos = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const ContentSuppliers = styled.View`
  gap: 10px;
`;

export const Rating = styled.Text`
  flex-direction: row;
  color: #2dc24e;
  font-size: 16px;
  font-weight: 500;
`;
