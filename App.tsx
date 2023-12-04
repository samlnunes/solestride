import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Supplier, Suppliers } from "./src/containers";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Fornecedores"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E8AC71",
          },
          headerBackTitle: " ",
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fornecedores" component={Suppliers} />
        <Stack.Screen
          name="Fornecedor"
          component={Supplier}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
      
      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
}
