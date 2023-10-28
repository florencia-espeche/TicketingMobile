import { globalStyles } from "../styles";
import { View, Text, StyleSheet } from "react-native";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Priority: </Text>
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={`${rating >= 1 ? "red" : "grey"}`}
          />
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={`${rating >= 2 ? "red" : "grey"}`}
          />
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={`${rating >= 3 ? "red" : "grey"}`}
          />
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={`${rating >= 4 ? "red" : "grey"}`}
          />
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={`${rating >= 5 ? "red" : "grey"}`}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
