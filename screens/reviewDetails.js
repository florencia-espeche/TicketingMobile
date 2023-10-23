import { globalStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const ReviewDetails = () => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
