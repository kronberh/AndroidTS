import { useState } from "react";
import { Text, SafeAreaView, StatusBar, FlatList, useWindowDimensions } from "react-native";
import { Race, BusforCard } from "./components/BusforCard";

export default function App() {
  const [races, setRaces] = useState<Array<Race>>([
    {
      timeFrom: new Date(0, 0, 0, 8, 0, 0, 0),
      timeTo: new Date(0, 0, 0, 14, 45, 0, 0),
      locationFrom: "Автостанція \"Привокзальна\"",
      locationTo: "Зупинка громадського транспорту",
      cost: 585,
      places: 6
    },
    {
      timeFrom: new Date(0, 0, 0, 8, 15, 0, 0),
      timeTo: new Date(0, 0, 0, 14, 45, 0, 0),
      locationFrom: "Зупинка тролейбусу №8",
      locationTo: "Зупинка громадського транспорту",
      cost: 585,
      places: 6
    },
    {
      timeFrom: new Date(0, 0, 0, 8, 0, 0, 0),
      timeTo: new Date(0, 0, 0, 15, 0, 0, 0),
      locationFrom: "Автостанція \"Привокзальна\"",
      locationTo: "Автовокзал \"Центральний\"",
      cost: 585,
      places: 6
    }
  ]);

  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f9253e" />
      <FlatList
        data={races}
        renderItem={({item}) => 
          <BusforCard
            timeFrom={item.timeFrom}
            timeTo={item.timeTo}
            locationFrom={item.locationFrom}
            locationTo={item.locationTo}
            cost={item.cost}
            places={item.places}
            shouldBePrinted={Boolean(Math.round(Math.random()))}
          />
        }
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  );
}

import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      default: 0
    }),
    justifyContent: "center",
    alignItems: "center"
  },
  flatlist: {
    gap: 20
  }
});
