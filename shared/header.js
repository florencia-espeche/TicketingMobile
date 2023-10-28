import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="confirmation-number"
        size={28}
        style={styles.icon}
        // onPress={openMenu}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: -10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "purple",
    letterSpacing: 1,
    fontFamily: "roboto-bold",
    marginLeft: 10,
  },
  icon: {
    color: "purple",
  },
});
