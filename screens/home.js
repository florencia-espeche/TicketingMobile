import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles";
import { View, Text, FlatList, Button } from "react-native";

export default function Home() {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Text style={globalStyles.titleText}>{item.title}</Text>
        )}
      />
      <Button title="press me" onPress={pressHandler} />
    </View>
  );
}
