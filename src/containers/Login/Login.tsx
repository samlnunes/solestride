import React from "react";
import { Image, Text, TouchableHighlight } from "react-native";

import {
  Container,
  Title,
  CustomButton,
  BoxButtons,
  ButtonText,
  FooterText,
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 100, height: 100 }}
      />
      <Title>Bem vindo!</Title>

      <BoxButtons>
        <CustomButton onPress={console.log}>
          <Image
            source={require("../../assets/microsoft-logo.png")}
            style={{ width: 20, height: 20 }}
          />
          <ButtonText>Continuar com Microsoft</ButtonText>
        </CustomButton>

        <CustomButton onPress={console.log}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={{ width: 20, height: 20 }}
          />
          <ButtonText>Continuar com Google</ButtonText>
        </CustomButton>

        <CustomButton
          onPress={console.log}
          style={{ backgroundColor: "#FF8C00" }}
        >
          <ButtonText style={{ color: "#fff" }}>
            Continuar com e-mail
          </ButtonText>
        </CustomButton>
      </BoxButtons>

      <FooterText>
        Ao continuar, você concorda com os{" "}
        <TouchableHighlight onPress={console.log}>
          <Text style={{ color: "#FF8C00", textDecorationLine: "underline" }}>
            Termos de Uso
          </Text>
        </TouchableHighlight>{" "}
        e{" "}
        <TouchableHighlight onPress={console.log}>
          <Text style={{ color: "#FF8C00", textDecorationLine: "underline" }}>
            Políticas de Privacidade
          </Text>
        </TouchableHighlight>{" "}
        Solestride
      </FooterText>
    </Container>
  );
};

export default Login;
