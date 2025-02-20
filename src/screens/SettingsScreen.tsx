import { View, Text, Button } from "react-native";
import { styles } from "../styles/styles";

function SettingsScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button
        title="Advanced"
        onPress={() => navigation.navigate("AdvancedSettings")}
      />
    </View>
  );
}

export { SettingsScreen };