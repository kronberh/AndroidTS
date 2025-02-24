import * as SQLite from "expo-sqlite";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import { genres } from "../data/genres";
import { useCallback, useState } from "react";
import { IBook } from "../interfaces/IBook";
import { useFocusEffect } from "@react-navigation/native";

let db: SQLite.SQLiteDatabase | null = null;

function AuthorDetailScreen({navigation, route}: any) {
  const { author } = route.params;
  const [books, setBooks] = useState<IBook[]>([]);

  const openDatabase = async () => {
    db = await SQLite.openDatabaseAsync("books.db");
    fetchBooks();
  };

  const fetchBooks = async () => {
    if (!db) return;
    const result = await db.getAllAsync<IBook>("SELECT * FROM books;");
    setBooks(result);
  };

  useFocusEffect(
    useCallback(() => {
      openDatabase();
    }, [])
  );
  
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
