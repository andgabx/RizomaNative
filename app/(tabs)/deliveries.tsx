import { View, StyleSheet } from "react-native";
import { Header } from "@/components/Header";
import { Text } from "react-native";

export default function DeliveriesScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Entregas</Text>
        <Text style={styles.description}>
          Gerencie suas entregas e logística
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDE4",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#8B4513",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});
