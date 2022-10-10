import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function LoadingScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor:colors.background}]}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width:"100%",
   height:"100%",
   alignItems: "center",
   justifyContent: "center",
  },
  image: { width: 72, height: 72 },
});
