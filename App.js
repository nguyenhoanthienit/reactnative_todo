import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>01</Text>
          </View>
          <Text style={styles.content}>Go to school</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={styles.number}>02</Text>
          </View>
          <Text style={styles.content}>Go home</Text>
        </View>
      </View>
      <View style={styles.input}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff7f8",
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 24,
    color: "#21a3d0",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#53d6f2",
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: "white",
    fontSize: 16,
    fontWeight: '700'
  },
  content: {
    width: '80%',
    fontSize: 16
  }
});
