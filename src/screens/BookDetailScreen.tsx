import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { authors } from "../data/authors";
import { genres } from "../data/genres";

function BookDetailScreen({ navigation, route }: any) {
  const { book } = route.params;
  const author = authors.find((value) => value.id == book.author_id);
  const genre = genres.find((value) => value.id == book.genre_id);

  return <View style={styles.container}>
    <Text style={styles.title}>{book.title}</Text>
    <TouchableOpacity
      style={styles.bookAuthorButton}
      onPress={() => navigation.navigate("Author", {author: author})}
    >
      <Text style={styles.bookAuthorButtonText}>{author?.name}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.bookGenreButton}
      onPress={() => navigation.navigate("Genre", {genre: genre})}
    >
      <Text style={styles.bookGenreButtonText}>{genre?.name}</Text>
    </TouchableOpacity>
    <Text style={styles.description}>{book.description}</Text>
    <Image style={styles.bookCover} source={{uri: book.image}} />
  </View>
}

export { BookDetailScreen };
