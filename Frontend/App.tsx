import 'react-native-gesture-handler';
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
import WorkLocations from "./Pages/StackScreens/Account/WorkLocations";
import { Login } from "./Pages/StackScreens/Account/Login";
import { StackRootParamList, StackLoginRoutes } from "./Pages/types";
import { Provider } from 'react-redux';
import { store } from './ReduxStore/store';
import { CreateAccount } from './Pages/StackScreens/Account/CreateAccount';

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
      <Provider store={store}>

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
                  headerTitleStyle: {
                    color: '#2a4560',
                    fontSize: 20,
                  },
                  headerStyle: {
                    backgroundColor: "#f8c806",
                  }
                })}
                component={Login}
              />

              <Stack.Group screenOptions={{
                headerStyle: {
                  backgroundColor: "#f8c806"
                },
                headerTitleStyle: {
                  color: '#2a4560',
                  fontSize: 20,
                },
                headerBackTitleVisible: false,
                headerShadowVisible: false,
              }}>
                <Stack.Screen
                  name={StackLoginRoutes.CREATE_ACCOUNT}
                  options={({ route, navigation }) => ({
                    title: "Create Account",
                    contentStyle: {
                      ...loginStyle.screenStyle,
                      backgroundColor: '#647ca9'
                    },
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
              </Stack.Group>
             
              <Stack.Screen
                name={StackLoginRoutes.MAIN}
                options={({ route, navigation }) => ({
                    title: "",
                    headerShown: false,
                  })}
                component={Main}
            />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>

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
