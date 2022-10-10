import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "../Icons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appNameContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.appName}>{"  "}Musma</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <Icon icon="searchLight"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:25,
    },
  appNameContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  image: { width: 21.95, height: 20.55 },
  appName: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },
});
