import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ShopItemComp } from "./components/ShopItemComp";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: isDarkMode ? "#fff" : "#000" }]}>Products</Text>
        <View style={styles.switchContainer}>
          <MaterialIcons name={ isDarkMode ? "dark-mode" : "light-mode" } color={isDarkMode ? "#fff" : "#000" } />
          <Switch
            trackColor={{ false: "#767577", true: "#f4f3f4" }}
            thumbColor={isDarkMode ? "#767577" : "#f4f3f4"}
            onValueChange={setIsDarkMode}
            value={isDarkMode}
          />
        </View>
      </View>
      <View style={styles.wrapperContainer}>
        <ScrollView horizontal={true} contentContainerStyle={styles.cardWrapper}>
          <ShopItemComp
            name="Wireless 5.3 Headphones, 13mm Speaker, 30H Playtime, Type-C Fast Charging Box"
            img="https://img.kwcdn.com/product/fancy/4cb5447a-b90f-495e-a9a8-d25f8894ae02.jpg?imageView2/2/w/800/q/70/format/webp"
            cost={643.38}
            isDarkMode={isDarkMode}
          />
          <ShopItemComp
            name="1080P HD Action Camera Featuring Ultra HD Recording"
            img="https://img.kwcdn.com/product/fancy/218d5ebf-68bb-4144-8c0b-10a2f1f522c5.jpg?imageView2/2/w/800/q/70/format/webp"
            cost={776.50}
            isDarkMode={isDarkMode}
          />
          <ShopItemComp
            name="Wireless Polarized Fashion Glasses with Integrated Mic"
            img="https://img.kwcdn.com/product/fancy/4bdcf821-6548-4db4-9113-8936faa74533.jpg?imageView2/2/w/800/q/70/format/webp"
            cost={277.32}
            isDarkMode={isDarkMode}
          />
          <ShopItemComp
            name="Solar-Powered, Hand Crank, NOAA AM/FM Weather Radio"
            img="https://img.kwcdn.com/product/fancy/02747c7e-0a61-463b-a101-5e6f5388ece5.jpg?imageView2/2/w/800/q/70/format/webp"
            cost={1671.32}
            isDarkMode={isDarkMode}
          />
          <ShopItemComp
            name="Rievbcau Digital USB Microscope with 10.92cm LCD, 1000X Zoom, PC Real-Time View"
            img="https://img.kwcdn.com/product/fancy/a805d7f2-37ce-4ac4-aaea-0bf21a88ec0f.jpg?imageView2/2/w/800/q/70/format/webp"
            cost={1419.88}
            isDarkMode={isDarkMode}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  cardWrapper: {
    flexDirection: "row",
    gap: 20,
    paddingBottom: 20
  },
  wrapperContainer: {
    overflow: "hidden"
  }
});

export default App;