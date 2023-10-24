import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="GameZone"
      screenOptions={{
        headerTintColor: "purple",
        headerStyle: {
          backgroundColor: "#eee",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="ABOUT" />,
        }}
      />
    </Stack.Navigator>
  );
}
