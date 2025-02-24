import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, Text, TouchableOpacity, View, Image, Button, Modal, TextInput, Alert } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "../styles/styles";
import { authors } from "../data/authors";
import { genres } from "../data/genres";
import { IBook } from "../interfaces/IBook";
import { IUser } from "../interfaces/IUser";
import { v4 as uuidv4 } from "uuid";
import { APP_SERVER } from "@env";
import { useFocusEffect } from "@react-navigation/native";

function HomeScreen({navigation}: any) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [saveVisible, setSaveVisible] = useState<boolean>(false);
  const [clearVisible, setClearVisible] = useState<boolean>(false);
  const [nukeVisible, setNukeVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [currentBook, setCurrentBook] = useState<IBook | null>(null);
  const [currentUser, setCurrentUser] = useState<IUser>();

  const tryLogin = async () => {
    const testUser = await AsyncStorage.getItem("user");
    if (testUser) {
      setCurrentUser(JSON.parse(testUser));
    } else {
      setCurrentUser(undefined);
    }
  }

  const saveBook = async () => {
    if (!title || !description) {
      Alert.alert("Помилка", "Введіть назву та опис");
      return;
    }
    if (!currentBook) {
      const id = uuidv4();
      try {
        const response = await fetch(`${APP_SERVER}`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, description})
        });
        const data: IBook = await response.json();
        if (data) {
          console.log(`Added book: ${JSON.stringify(data)}`)
        }
        await fetchBooks();
      } catch (error) {
        console.error("❌ Помилка при додаванні книги:", error);
      }
    } else {
      try {
        // todo put request
        closeAddModal();
        await fetchBooks();
      } catch (error) {
        console.error("❌ Помилка при редагуванні книги:", error);
      }
    }
    closeAddModal();
  };

  const deleteBook = async (id: number) => {
    // todo delete request
    await fetchBooks();
  };

  const selectBookToEdit = (book: IBook) => {
    setCurrentBook(book);
    setTitle(book.title);
    setDescription(book.description);
  };

  async function clearBooks() {
    // todo delete request
    await fetchBooks();
    setClearVisible(false);
  }

  async function nukeData() {
    // todo delete request
    await fetchBooks();
    setNukeVisible(false);
  }

  function closeAddModal() {
    setCurrentBook(null);
    setTitle("");
    setDescription("");
    setSaveVisible(false);
  }

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${APP_SERVER}`)
      const data :IBook[] = await response.json();
      if (data) {
        setBooks(data);
      } else {
        console.warn('no data')
      }
    } catch (error) {
      throw new Error("Error fetching books from server.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchBooks();
      tryLogin();
    }, [])
  );

  return <View style={styles.container}>
    <View style={styles.header}>
    {currentUser && <>
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
    </>}
    {!currentUser && <>
      <Text style={styles.title}>You need to</Text>
      <Button title="Log in" onPress={() => navigation.navigate("Profile")} />
      <Text style={styles.title}>to modify data.</Text>
    </>}
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
              {currentUser && <>
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
              </>}
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
