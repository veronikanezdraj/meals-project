import { View, Text, StyleSheet } from "react-native";
function ListItem({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}
export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: "#e6a783",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
