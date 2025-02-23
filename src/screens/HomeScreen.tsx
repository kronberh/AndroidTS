import * as SQLite from "expo-sqlite";
import { FlatList, Text, TouchableOpacity, View, Image, Button, Modal, TextInput, Alert } from "react-native";
import { styles } from "../styles/styles";
import { authors } from "../data/authors";
import { genres } from "../data/genres";
import { useEffect, useState } from "react";
import { IBook } from "../interfaces/IBook";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

let db: SQLite.SQLiteDatabase | null = null;

function HomeScreen({navigation}: any) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [saveVisible, setSaveVisible] = useState<boolean>(false);
  const [clearVisible, setClearVisible] = useState<boolean>(false);
  const [nukeVisible, setNukeVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [currentBook, setCurrentBook] = useState<IBook | null>(null);

  const openDatabase = async () => {
    db = await SQLite.openDatabaseAsync("books.db");
    createTable();
    fetchBooks();
  };

  const createTable = async () => {
    if (!db) return;
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS books (
        id NUMBER PRIMARY KEY,
        author_id NUMBER NOT NULL,
        genre_id NUMBER NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
      );
    `);
  };

  const fetchBooks = async () => {
    if (!db) return;
    const result = await db.getAllAsync<IBook>("SELECT * FROM books;");
    setBooks(result);
  };

  const saveBook = async () => {
    if (!db) {
      console.error("❌ Помилка при з'єднанні до БД!");
      return;
    }
    if (!title || !description) {
      Alert.alert("Помилка", "Введіть назву та опис");
      return;
    }
    if (!currentBook) {
      const id = uuidv4();
      try {
        await db.runAsync(
          "INSERT INTO books (id, title, author_id, genre_id, description, image) VALUES (?, ?, ?, ?, ?, ?);",
          [id, title, Math.floor(Math.random() * 3 + 1), Math.floor(Math.random() * 3 + 1), description, "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"]
        );
        await fetchBooks();
      } catch (error) {
        console.error("❌ Помилка при додаванні книги:", error);
      }
    } else {
      try {
        await db.runAsync(
          "UPDATE books SET title = ?, description = ? WHERE id = ?;",
          [title, description, currentBook.id]
        );
        closeAddModal();
        await fetchBooks();
      } catch (error) {
        console.error("❌ Помилка при редагуванні книги:", error);
      }
    }
    closeAddModal();
  };

  const deleteBook = async (id: number) => {
    if (!db) return;
    await db.runAsync("DELETE FROM books WHERE id = ?;", [id]);
    await fetchBooks();
  };

  const selectBookToEdit = (book: IBook) => {
    setCurrentBook(book);
    setTitle(book.title);
    setDescription(book.description);
  };

  async function clearBooks() {
    if (!db) return;
    await db.runAsync(
      "DELETE FROM books"
    );
    await fetchBooks();
    setClearVisible(false);
  }

  async function nukeData() {
    if (!db) return;
    await db.runAsync(
      "DELETE FROM books"
      // maybe more tables
    );
    await fetchBooks();
    setNukeVisible(false);
  }

  function closeAddModal() {
    setCurrentBook(null);
    setTitle("");
    setDescription("");
    setSaveVisible(false);
  }

  useEffect(() => {
    openDatabase();
  }, []);

  return <View style={styles.container}>
    <View style={styles.header}>
      <Button
        title="Add book"
        onPress={() => setSaveVisible(true)}
      />
      <Button
        title="Clear books"
        onPress={() => setClearVisible(true)}
      />
      <Button
        title="Clear everything"
        onPress={() => setNukeVisible(true)}
      />
    </View>
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
              <View style={styles.actions}>
                <Button
                  title="Edit"
                  onPress={() => {
                    selectBookToEdit(item);
                    setSaveVisible(true);
                  }}
                />
                <Button
                  title="Delete"
                  onPress={() => deleteBook(item.id)}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
    <Modal
      visible={saveVisible}
      onRequestClose={closeAddModal}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <TextInput
          value={title}
          style={styles.input}
          placeholder="Title"
          onChangeText={setTitle}
        />
        <TextInput
          value={description}
          style={styles.input}
          placeholder="Description"
          onChangeText={setDescription}
        />
        <View style={styles.modalActions}>
          <Button
            title="Cancel"
            onPress={closeAddModal}
          />
          <Button
            title="Save"
            onPress={saveBook}
          />
        </View>
      </View>
    </Modal>
    <Modal
      visible={clearVisible}
      onRequestClose={() => setClearVisible(false)}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>You are about to delete all books from storage.</Text>
        <Text style={styles.title}>Continue?</Text>
        <View style={styles.modalActions}>
          <Button
            title="No"
            onPress={() => setClearVisible(false)}
          />
          <Button
            title="Yes"
            onPress={clearBooks}
          />
        </View>
      </View>
    </Modal>
    <Modal
      visible={nukeVisible}
      onRequestClose={() => setNukeVisible(false)}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <Text style={[styles.title, {color: "darkred"}]}>You are about to NUKE THE STORAGE DATA !!!</Text>
        <Text style={[styles.title, {color: "darkred"}]}>Proceed with EXTREME CAUTION!</Text>
        <View style={styles.modalActions}>
          <Button
            title="Cancel"
            onPress={() => setNukeVisible(false)}
          />
          <Button
            title="Proceed (think twice)"
            onPress={nukeData}
          />
        </View>
      </View>
    </Modal>
  </View>
}

export { HomeScreen };
