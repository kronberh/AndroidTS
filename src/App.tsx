import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { AuthorDetailScreen } from "./screens/AuthorDetailScreen";
import { GenreDetailScreen } from "./screens/GenreDetailScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { AdvancedSettingsScreen } from "./screens/AdvancedSettingsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { AuthorsScreen } from "./screens/AuthorsScreen";
import { GenresScreen } from "./screens/GenresScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const icons: Record<string, string> = {
  "Home": "home",
  "Settings": "settings",
  "Profile": "person",
};

function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Genres" component={GenresScreen} />
      <Drawer.Screen name="Authors" component={AuthorsScreen} />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Book" component={BookDetailScreen} />
      <Stack.Screen name="Author" component={AuthorDetailScreen} />
      <Stack.Screen name="Genre" component={GenreDetailScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="AdvancedSettings" component={AdvancedSettingsScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name={icons[route.name] || "question-mark"} size={size} color={color} />;
          },
          tabBarActiveTintColor: "cornflowerblue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//     padding: 20,
//     paddingTop: Platform.select({
//       ios: 0,
//       default: StatusBar.currentHeight,
//     }),
//   },
// });
