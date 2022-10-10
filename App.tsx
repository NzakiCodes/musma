import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  useTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "./components/Icons";
import FavouriteScreen from "./screens/FavouriteScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import SettingsScreen from "./screens/SettingsScreen";

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00D150",
    background: "#0E0E10",
  },
};
const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00D150",
    background: "#FFFFFF",
  },
};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
        {/* Change next line to theme base */}
        <StatusBar style={scheme === "dark" ? "light" : "light"} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const MainStack = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor:"#00D150",
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.background,
            paddingBottom: 20,
            marginVertical: 20,
            height: 70,
            opacity:0.4,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarLabelStyle:{
            fontSize:12,
            fontWeight:'500'
          },
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                return <Icon type="nav" active={focused} icon="home" />;
                break;
              case "Playlist":
                return <Icon type="nav" active={focused} icon="playlist" />;
                break;
              case "Favourite":
                return <Icon type="nav" active={focused} icon="favourite" />;
                break;
              case "Settings":
                return <Icon type="nav" active={focused} icon="settings" />;
                break;
              default:
                iconName = "default";
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Playlist" component={PlaylistScreen} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E10",
    alignItems: "center",
    justifyContent: "center",
  },
});
