import { globalStyles } from "../styles";
import { View, Text } from "react-native";

const ReviewDetails = ({ route }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
};

export default ReviewDetails;
