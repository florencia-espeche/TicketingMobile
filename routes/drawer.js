import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import Home from "../screens/home";
import About from "../screens/about";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="GameZone"
        screenOptions={{
          headerTintColor: "#333",
          headerStyle: {
            backgroundColor: "#aaa",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackground: () => (
            <Image
              source={require("../assets/game_bg.png")}
              style={{ height: 90 }}
            />
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
