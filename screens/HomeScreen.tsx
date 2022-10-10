import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Tab from "../components/Tabs";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.tabContainer}>
      <Tab/>
      </View>
      <ScrollView horizontal>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
       <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
       <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
  },
  container:{
    
    paddingTop:32
  },
  tabContainer:{
    marginTop:10
  },
  image: { width: 131, height: 119, marginHorizontal:15 },

});
