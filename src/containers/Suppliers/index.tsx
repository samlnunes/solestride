import { useState, useEffect } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import {
  Container,
  BoxSuppliers,
  Title,
  Top,
  ButtonMore,
  Supplier,
  Position,
  Name,
  Abbreviation,
  Infos,
  Rating,
  ContentSuppliers,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Feather } from "@expo/vector-icons";

interface RedirectSupplierProps {
  id: number;
  name: string;
}

const Suppliers: React.FC = () => {
  const navigation = useNavigation();
  const [suppliers, setSuppliers] = useState([]);

  const redirectSupplier = ({ id, name }: RedirectSupplierProps) => {
    navigation.navigate("Fornecedor", { id: id, name: name });
  };

  const getSuppliers = async () => {
    try {
      const response = await axios.get(`http://192.168.15.80:8080/fornecedor`);
      setSuppliers(response.data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };

  const deleteSupplier = async (id: number) => {
    try {
      await axios.delete(`http://192.168.15.80:8080/fornecedor/${id}`);
      getSuppliers();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <Container>
      <StatusBar translucent />

      <BoxSuppliers>
        <Top>
          <Title>🔥 Trending</Title>
          <ButtonMore>
            <Text>Ver mais</Text>
          </ButtonMore>
        </Top>

        <ContentSuppliers>
          {suppliers ? (
            suppliers?.map((supplier, key) => (
              <Supplier
                key={supplier.id}
                onPress={() =>
                  redirectSupplier({ id: supplier.id, name: supplier.nome })
                }
              >
                <Infos>
                  <Position>{key + 1}</Position>
                  <Name>{supplier.nome}</Name>
                  <Abbreviation>KLG</Abbreviation>
                </Infos>

                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <Rating>4.9/5</Rating>

                  <TouchableOpacity onPress={() => deleteSupplier(supplier.id)}>
                    <Feather name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </Supplier>
            ))
          ) : (
            <>
              <Supplier
                onPress={() => redirectSupplier({ id: 1, name: "Kalunga" })}
              >
                <Infos>
                  <Position>1</Position>
                  <Name>Kalunga</Name>
                  <Abbreviation>KLG</Abbreviation>
                </Infos>

                <Rating>4.9/5</Rating>
              </Supplier>
              <Supplier>
                <Infos>
                  <Position>1</Position>
                  <Name>Kalunga</Name>
                  <Abbreviation>KLG</Abbreviation>
                </Infos>

                <Rating>4.9/5</Rating>
              </Supplier>
              <Supplier>
                <Infos>
                  <Position>1</Position>
                  <Name>Kalunga</Name>
                  <Abbreviation>KLG</Abbreviation>
                </Infos>

                <Rating>4.9/5</Rating>
              </Supplier>
              <Supplier>
                <Infos>
                  <Position>1</Position>
                  <Name>Kalunga</Name>
                  <Abbreviation>KLG</Abbreviation>
                </Infos>

                <Rating>4.9/5</Rating>
              </Supplier>
            </>
          )}
        </ContentSuppliers>
      </BoxSuppliers>
    </Container>
  );
};

export default Suppliers;
