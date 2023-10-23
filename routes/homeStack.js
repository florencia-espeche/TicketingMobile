import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerTintColor: "purple",
            headerStyle: {
              backgroundColor: "lightblue",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "GameZone" }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{ title: "Review Details" }}
          />
          <Stack.Screen name="About" component={About} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
