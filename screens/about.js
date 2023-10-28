import { globalStyles } from "../styles";

import { View, Text } from "react-native";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.titleText, { textAlign: "center" }]}>
        flor.espeche@gmail.com
      </Text>
    </View>
  );
};

export default About;
