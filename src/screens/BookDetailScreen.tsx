import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";

function BookDetailScreen({ navigation, route }: any) {
  const { book } = route.params;
  return <View style={styles.container}>
    <Text style={styles.bookTitle}>{book.title}</Text>
    <TouchableOpacity
      style={styles.bookAuthorButton}
      onPress={() => navigation.navigate("Author", {author: {name: book.author, description: book.authorDescription}})}
    >
      <Text style={styles.bookAuthorButtonText}>{book.author}</Text>
    </TouchableOpacity>
    <Text style={styles.bookDescription}>{book.description}</Text>
    <Image style={styles.bookCover} source={{uri: book.image}} />
  </View>
}

export { BookDetailScreen };
