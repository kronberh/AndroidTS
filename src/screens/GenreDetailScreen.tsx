import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { authors } from "../data/authors";
import { books } from "../data/books";

function GenreDetailScreen({navigation, route}: any) {
  const { genre } = route.params;

  return <View style={styles.container}>
    <Text style={styles.title}>{genre.name}</Text>
    <Text style={styles.description}>{genre.description}</Text>
    <FlatList
      data={books.filter((value) => value.genre_id == genre.id)}
      renderItem={({item}) => {
        const author = authors.find((value) => value.id == item.author_id);
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

export { GenreDetailScreen };
