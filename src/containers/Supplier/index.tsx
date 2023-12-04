import React, { useEffect, useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";

import {
  Container,
  Infos,
  Title,
  Text,
  BoxTags,
  Orders,
  Order,
  Status,
  OrderNumber,
  Name,
  OrderInfos,
  Value,
  SectionTitle,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { Tag, TextField } from "../../components";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Feather, AntDesign } from "@expo/vector-icons";

const Supplier: React.FC = () => {
  const route = useRoute();
  const { id } = route.params;

  const [edit, setEdit] = useState(false);
  const [supplierData, setSupplierData] = useState();
  const [newName, setNewName] = useState(supplierData?.nome ?? "");

  useEffect(() => {
    if (id) {
      getSupplier();
    }
  }, []);

  useEffect(() => {
    if (supplierData?.nome) {
      setNewName(supplierData.nome);
    }
  }, [supplierData?.nome]);

  const getSupplier = async () => {
    try {
      const response = await axios.get(
        `http://192.168.15.80:8080/fornecedor/${id}`
      );

      setSupplierData(response.data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };

  const editSupplier = async () => {
    try {
      const response = await axios.put(
        `http://192.168.15.80:8080/fornecedor/${id}`,
        { ...supplierData, nome: newName, senha: "teste123" }
      );

      setSupplierData(response.data);
      setEdit(false);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };

  return (
    <Container>
      <Image
        source={require("../../assets/logo-kalunga.png")}
        style={{ width: "auto", height: 200 }}
      />

      <Infos>
        {edit ? (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TextField
              onChange={setNewName}
              value={newName}
              defaultValue={supplierData?.nome}
            />

            <TouchableOpacity onPress={() => editSupplier()}>
              <AntDesign name="save" size={24} color="green" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEdit(false)}>
              <AntDesign name="close" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title>{supplierData?.nome}</Title>
            <TouchableOpacity onPress={() => setEdit(true)}>
              <Feather name="edit-2" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}

        <Text>
          Papelaria, Material de Escritório, Informática, Impressoras e
          Cartuchos, Material Escolar e muito mais. A Kalunga tem tudo que você
          precisa num só lugar.
        </Text>
      </Infos>

      <BoxTags>
        <Tag text="papelaria" />
        <Tag text="informática" />
        <Tag text="materiais de escritório" />
      </BoxTags>

      <SectionTitle>Últimos pedidos</SectionTitle>
      <Orders>
        <Order>
          <OrderInfos>
            <Status />
            <OrderNumber>2839</OrderNumber>
            <Name>CANETAS AZUL</Name>
          </OrderInfos>

          <Value>R$ 3.460,79</Value>
        </Order>
        <Order>
          <OrderInfos>
            <Status />
            <OrderNumber>2839</OrderNumber>
            <Name>CANETAS AZUL</Name>
          </OrderInfos>

          <Value>R$ 3.460,79</Value>
        </Order>
        <Order>
          <OrderInfos>
            <Status />
            <OrderNumber>2839</OrderNumber>
            <Name numberOfLines={1} ellipsizeMode="tail">
              CANETAS AZUL AZUL CANETA
            </Name>
          </OrderInfos>

          <Value>R$ 3.460,79</Value>
        </Order>
      </Orders>
    </Container>
  );
};

export default Supplier;
