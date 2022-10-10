import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>SettingsScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
  },
});
