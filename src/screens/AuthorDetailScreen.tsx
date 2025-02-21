import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { books } from "../data/books";
import { genres } from "../data/genres";

function AuthorDetailScreen({navigation, route}: any) {
  const { author } = route.params;
  
  return <View style={styles.container}>
    <Text style={styles.title}>{author.name}</Text>
    <Text style={styles.description}>{author.description}</Text>
    <FlatList
      data={books.filter((value) => value.author_id == author.id)}
      renderItem={({item}) => {
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

export { AuthorDetailScreen };
