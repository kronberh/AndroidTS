import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../styles/styles";
import { books } from "../data/books";
import { authors } from "../data/authors";
import { genres } from "../data/genres";

function HomeScreen({navigation}: any) {
  return <View style={styles.container}>
    <FlatList
      data={books}
      renderItem={({item}) => {
        const author = authors.find((value) => value.id == item.author_id);
        const genre = genres.find((value) => value.id == item.genre_id);
        return (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate("Book", {book: item})}
          >
            <Image style={styles.itemImage} source={{uri: item.image}} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{author?.name}</Text>
              <Text style={styles.subtitle}>{genre?.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
}

export { HomeScreen };
