import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { genres } from "../data/genres";

function GenresScreen({navigation}: any) {
  return <View style={styles.container}>
    <FlatList
      data={genres}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate("Genre", {genre: item})}
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

export { GenresScreen };
