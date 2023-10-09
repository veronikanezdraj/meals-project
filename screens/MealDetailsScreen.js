import { View, Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meals detail {mealId}</Text>
    </View>
  );
}

export default MealDetailsScreen;
