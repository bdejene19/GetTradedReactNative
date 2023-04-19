import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import { CreateAccount } from "./Pages/CreateAccount";
import { Login } from "./Pages/Login";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import WorkLocations from "./Pages/WorkLocations";
import Main from "./Components/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  let loginStyle = {
    headerStyle: {},
    screenStyle: {
      padding: 10,
    },
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={({ route, navigation }) => ({})}
              component={Login}
            />

            <Stack.Screen
              name="Create Account"
              options={({ route, navigation }) => ({
                title: "Create Account",
                contentStyle: loginStyle.screenStyle,
              })}
              component={CreateAccount}
            />
            <Stack.Screen
              name="Work Locations"
              options={({ route, navigation }) => ({
                title: "Locations",
                contentStyle: loginStyle.screenStyle,
              })}
              component={WorkLocations}
            />
            <Stack.Screen
              name="Main"
              options={({ route, navigation }) => ({
                contentStyle: loginStyle.screenStyle,
              })}
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  spinContainer: {
    width: "100%",
  },
});
