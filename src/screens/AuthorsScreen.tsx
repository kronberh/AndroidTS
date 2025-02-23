import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { authors } from "../data/authors";

function AuthorsScreen({navigation}: any) {
  return <View style={styles.container}>
    <FlatList
      data={authors}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate("Author", {author: item})}
          >
            <View>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
}

export { AuthorsScreen };
