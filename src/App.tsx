import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { AuthorDetailScreen } from "./screens/AuthorDetailScreen";
import { GenreDetailScreen } from "./screens/GenreDetailScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { AdvancedSettingsScreen } from "./screens/AdvancedSettingsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BooksStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Book" component={BookDetailScreen} />
    <Stack.Screen name="Author" component={AuthorDetailScreen} />
    <Stack.Screen name="Genre" component={GenreDetailScreen} />
  </Stack.Navigator>
)
const SettingsStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="AdvancedSettings" component={AdvancedSettingsScreen} />
  </Stack.Navigator>
)
const ProfileStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return <MaterialIcons name="home" size={size} color={color} />
            }
            else if (route.name === "Settings") {
              return <MaterialIcons name="settings" size={size} color={color} />
            }
            else if (route.name === "Profile") {
              return <MaterialIcons name="person" size={size} color={color} />
            }
            else {
              return <MaterialIcons name="question-mark" size={size} color={color} />
            }
          },
          tabBarActiveTintColor: "cornflowerblue",
          tabBarInactiveTintColor: "gray",
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={BooksStackScreens} />
        <Tab.Screen name="Settings" component={SettingsStackScreens} />
        <Tab.Screen name="Profile" component={ProfileStackScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    paddingTop: Platform.select({
      ios: 0,
      default: StatusBar.currentHeight
    }),
  }
})
