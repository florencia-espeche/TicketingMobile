import { globalStyles } from "../styles";
import { View, Text } from "react-native";
import Card from "../shared/card";

const ReviewDetails = ({ route }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
