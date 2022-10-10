import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Tab() {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <TabButton isActive text="Suggested" />
      <TabButton isActive={false} text="Songs" />
      <TabButton isActive={false} text="Artists" />
      <TabButton isActive={false} text="Albums" />
      <TabButton isActive={false} text="Favourite" />
    </ScrollView>
  );
}

const TabButton = ({ text, isActive }: { text: string; isActive: boolean }) => {
  return (
    <TouchableOpacity style={{marginHorizontal:19,}} activeOpacity={0.6}>
      <Text style={{ color: isActive ? "#00D150" : "#787878", fontSize:16, fontWeight:"500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
  },
  text: {
    color: "#FFFFFF",
  },
});
