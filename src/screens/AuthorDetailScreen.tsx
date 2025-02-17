import { View, Text } from "react-native";
import { styles } from "../styles/styles";

function AuthorDetailScreen({route}: any) {
  const { author } = route.params;
  return <View style={styles.container}>
    <Text style={styles.bookTitle}>{author.name}</Text>
    <Text style={styles.bookDescription}>{author.description}</Text>
  </View>
}

export { AuthorDetailScreen };
