import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

export default function Header({ title }) {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      {/* <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openMenu}
      /> */}
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "purple",
    letterSpacing: 1,
    fontFamily: "roboto-bold",
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "purple",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
