import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import DrawerNavigator from "./routes/drawer";

export default function App() {
  const [fontLoaded] = useFonts({
    "numino-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "numino-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Black.ttf"),
  });
  if (fontLoaded) {
    return <DrawerNavigator />;
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}
