import * as SQLite from "expo-sqlite";
import * as Crypto from "expo-crypto";
import { View, Text, TextInput, Button } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "../styles/styles";
import { IUser } from "../interfaces/IUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

let db: SQLite.SQLiteDatabase | null = null;

function ProfileScreen() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>();

  const tryLogin = async () => {
    const testUser = await AsyncStorage.getItem("user");
    if (testUser) {
      setCurrentUser(JSON.parse(testUser));
    } else {
      setCurrentUser(undefined);
    }
  }

  const openDatabase = async () => {
    db = await SQLite.openDatabaseAsync("books.db");
    createTable();
    fetchUsers();
  };

  const createTable = async () => {
    if (!db) return;
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        login TEXT PRIMARY KEY,
        passhash TEXT NOT NULL
      );
    `);
  };

  const fetchUsers = async () => {
    if (!db) return;
    const result = await db.getAllAsync<IUser>("SELECT * FROM users;");
    setUsers(result);
  };

  async function handleLogin() {
    if (!db) {
      console.error("❌ Помилка при з'єднанні до БД!");
      return;
    }
    if (!login || !password) {
      setError("Not all fields are filled.");
      return;
    }
    const user = users.find((user) => user.login === login)
    if (!user) {
      console.log(1);
      setError("Incorrect login or password.");
      return;
    }
    const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
    if (user.passhash !== hash) {
      console.log(2);
      setError("Incorrect login or password.");
      return;
    }
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
    setLogin("");
    setPassword("");
    setError("");
  }

  async function handleRegister() {
    if (!db) {
      console.error("❌ Помилка при з'єднанні до БД!");
      return;
    }
    if (!login || !password) {
      setError("Not all fields are filled.");
      return;
    }
    if (users.some((user) => user.login === login)) {
      setError("Login already occupied, choose another one.");
      return;
    }
    const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
    try {
      await db.runAsync(
        "INSERT INTO users (login, passhash) VALUES (?, ?);",
        [login, hash]
      );
      await fetchUsers();
    } catch (error) {
      console.error("❌ Помилка при додаванні користувача:", error);
      return;
    }
    await handleLogin();
  }

  async function handleLogout() {
    await AsyncStorage.removeItem("user");
    setCurrentUser(undefined);
  }

  useFocusEffect(
    useCallback(() => {
      openDatabase();
      tryLogin();
    }, [])
  );

  return (
    <View style={styles.container}>
      {currentUser && <>
        <Text style={styles.title}>Hello {currentUser.login}!</Text>
        <Button title="Logout" onPress={handleLogout} />
      </>}
      {!currentUser && <>
        <TextInput style={styles.input} placeholder="Login" value={login} onChangeText={setLogin} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <View style={styles.actions}>
          <Button title="Login" onPress={handleLogin} />
          <Button title="Register" onPress={handleRegister} />
          <Text style={styles.error}>{error}</Text>
        </View>
      </>}
    </View>
  );
}

export { ProfileScreen };