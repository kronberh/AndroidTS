import { Platform, Image, SafeAreaView, StatusBar, StyleSheet, useWindowDimensions, View, ImageBackground } from "react-native";
import { scale } from "react-native-size-matters";
import { RaceForm } from "./components/RaceForm";
import { SvgUri } from 'react-native-svg';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const BooksStackScreens = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Book" component={BookDetailScreen} />
//     <Stack.Screen name="Author" component={AuthorDetailScreen} />
//   </Stack.Navigator>
// )
// const SettingsStackScreens = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//     <Stack.Screen name="AdvancedSettings" component={AdvancedSettingsScreen} />
//   </Stack.Navigator>
// )
// const ProfileStackScreens = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//   </Stack.Navigator>
// )

function App() {
  const { width, height } = useWindowDimensions();

  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({ color, size }) => {
    //         if (route.name === "Home") {
    //           return <MaterialIcons name="home" size={size} color={color} />
    //         }
    //         else if (route.name === "Settings") {
    //           return <MaterialIcons name="settings" size={size} color={color} />
    //         }
    //         else if (route.name === "Profile") {
    //           return <MaterialIcons name="person" size={size} color={color} />
    //         }
    //         else {
    //           return <MaterialIcons name="question-mark" size={size} color={color} />
    //         }
    //       },
    //       tabBarActiveTintColor: "cornflowerblue",
    //       tabBarInactiveTintColor: "gray",
    //       headerShown: false
    //     })}
    //   >
    //     <Tab.Screen name="Home" component={BooksStackScreens} />
    //     <Tab.Screen name="Settings" component={SettingsStackScreens} />
    //     <Tab.Screen name="Profile" component={ProfileStackScreens} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: "https://allenjoystudio.com/cdn/shop/files/Snowy_Winter_Scene_Photography_Backdrop_GB_NKWVW2T_Square.jpg?v=1718386693"}}
        resizeMode="cover"
        style={[styles.container, styles.bgImage]}
      >
        <View style={styles.overlay} />
        <SvgUri
          width={scale(500)}
          height={scale(50)}
          uri="https://busfor.ua/packs/_/assets/javascripts/new/app/react/components/Header/dotua_bbc_redirection_logo_white-8ac168364606ee78c0ccfc540d5d3031.svg"
        />
        <RaceForm orientation={(width > height) ? "landscape" : "portrait"} />
      </ImageBackground>
      <StatusBar backgroundColor="tomato" />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightblue"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  bgImage: {
    gap: 50,
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 0,
      default: StatusBar.currentHeight
    }),
    padding: scale(20)
  }
})
