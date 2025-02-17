import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { AuthorDetailScreen } from "./screens/AuthorDetailScreen";
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { OlxCard, Product } from "./components/OlxCard";

const Stack = createNativeStackNavigator();
const products: Product[] = [
  {
    name: "Мʼяка іграшка нічник Веселий Стіч з функцією дихання",
    cost: 550,
    img: "https://ireland.apollo.olxcdn.com/v1/files/l8yj0ojak7so-UA/image;s=1000x700",
    place: "Рівне",
    date: new Date(2025, 1, 13)
  },
  {
    name: "Каляска коляска дитячий візочок трансформер Бугабу Хамелеон 3Bugaboo",
    cost: 6150,
    img: "https://ireland.apollo.olxcdn.com/v1/files/rqs8ievt5rsr3-UA/image;s=1000x700",
    place: "Корсунь-Шевченківський",
    date: new Date(2025, 1, 17)
  },
  {
    name: "Туя Смарагд 40-50 см у горщику 2 л; ялинки, ялівці, сосни, хвойні росл",
    cost: 85,
    img: "https://ireland.apollo.olxcdn.com/v1/files/qeku9q6306qb3-UA/image;s=1000x700",
    place: "Сміла",
    date: new Date(2025, 1, 16)
  },
  {
    name: "Тюльпан голандський вирощений в Украіні 45 см+ бутон 10-12",
    cost: 32,
    img: "https://ireland.apollo.olxcdn.com/v1/files/l9dzv7fqkokp2-UA/image;s=1000x700",
    place: "Зимна Вода",
    date: new Date(2025, 1, 17)
  },
];

function App() {
  return (
    //<NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Book" component={BookDetailScreen} />
    //     <Stack.Screen name="Author" component={AuthorDetailScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) =>
          <OlxCard
            name={item.name}
            cost={item.cost}
            img={item.img}
            place={item.place}
            date={item.date}
          />
        }
        keyExtractor={(item, idx) => idx.toString()}
        contentContainerStyle = {styles.list}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    paddingTop: Platform.select({
      ios: 0,
      default: StatusBar.currentHeight
    }),
    backgroundColor: "#ddd"
  },
  list: {
    gap: scale(20),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
})
