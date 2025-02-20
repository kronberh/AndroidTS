import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../styles/styles";
import { books } from "../data/books";

function HomeScreen({navigation}: any) {
  return <View style={styles.container}>
    <FlatList
      data={books}
      renderItem={({item}) =>
        <TouchableOpacity
          style={styles.bookItem}
          onPress={() => navigation.navigate("Book", {book: item})}
        >
          <Image style={styles.bookImage} source={{uri: item.image}} />
          <View>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </View>
        </TouchableOpacity>
      }
      keyExtractor={(item) => item.id}
    />
  </View>
}

export { HomeScreen };
