import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Main from "./Components/Main";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CreateAccount } from "./Pages/StackScreens/CreateAccount";
import WorkLocations from "./Pages/StackScreens/WorkLocations";
import { Login } from "./Pages/StackScreens/Login";
import { StackRootParamList, StackLoginRoutes } from "./Pages/types";
import ChatInteraction from "./Pages/StackScreens/ChatInteraction";

const Stack = createNativeStackNavigator<StackRootParamList>();
const DrawerMenuIcon = () => (
  <TouchableOpacity onPress={() => {}}>
    <FontAwesomeIcon icon={faBars} />
  </TouchableOpacity>
);
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
              name={StackLoginRoutes.LOGIN}
              options={({ route, navigation }) => ({
                headerBackTitleVisible: false,
                headerBackVisible: false,
                headerBackButtonMenuEnabled: false,
              })}
              component={Login}
            />

            <Stack.Screen
              name={StackLoginRoutes.CREATE_ACCOUNT}
              options={({ route, navigation }) => ({
                title: "Create Account",
                contentStyle: loginStyle.screenStyle,
              })}
              component={CreateAccount}
            />
            <Stack.Screen
              name={StackLoginRoutes.WORK_LOCATIONS}
              options={({ route, navigation }) => ({
                title: "Locations",
                contentStyle: loginStyle.screenStyle,
              })}
              component={WorkLocations}
            />
            <Stack.Screen
              name={StackLoginRoutes.MAIN}
              options={({ route, navigation }) => ({
                  title: "",
                  headerShown: false,
                })}
              component={Main}
            />
             <Stack.Screen
              name={StackLoginRoutes.CHAT}
              options={({ route, navigation }) => ({
                  title: "",
                  headerShown: false,
                })}
              component={ChatInteraction}
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
