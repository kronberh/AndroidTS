import { Image, StyleSheet, Pressable, Text, TextInput, View } from "react-native"
import { useState } from "react";

type Product = {
    name: string;
    cost: number;
    img: string
}

function ShopItemComp({name, cost, img, isDarkMode=false}: Product & { isDarkMode?: boolean }): React.ReactElement {
    const [count, setCount] = useState<number>(0)
    
    return <View style={[styles.card, { backgroundColor: isDarkMode ? "#555" : "#ccc" }]}>
        <Image
            source={{ uri: img }}
            style={styles.image}
        />
        <View style={styles.textCover}>
            <Text style={{ color: isDarkMode ? "white" : "black" }}>{name}</Text>
        </View>
        <Text style={[styles.totalCostText, { color: isDarkMode ? "crimson" : "red" }]}>Total: ₴{cost * count}</Text>
        <Text style={[styles.costText, { color: isDarkMode ? "white" : "black" }]}>₴{cost} per unit</Text>
        <View style={styles.costDiv}>
            <Pressable
                style={[styles.btn, { backgroundColor: count <= 0 ? "#777" : isDarkMode ? "darkgreen" : "limegreen" }]}
                onPress={() => setCount(count - 1)}
                android_ripple={{color: "green", foreground: true}}
                disabled = {count <= 0}
            >
                <Text style={[styles.btnText, { color: isDarkMode ? "white" : "black" }]}>-</Text>
            </Pressable>
            <TextInput
                value={count.toString()}
                onChangeText={(text) => {setCount(text === "" ? 0 : parseInt(text.replace(/[^0-9]/g, '')))}}
                keyboardType="numeric"
                style={[styles.input, { color: isDarkMode ? "white" : "black", backgroundColor: isDarkMode ? "#333" : "white" }]}
            />
            <Pressable
                style={[styles.btn, { backgroundColor: isDarkMode ? "darkgreen" : "limegreen" }]}
                onPress={() => setCount(count + 1)}
                android_ripple={{color: "green", foreground: true}}
            >
                <Text style={[styles.btnText, { color: isDarkMode ? "white" : "black" }]}>+</Text>
            </Pressable>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 350,
        padding: 10,
        borderRadius: 20,
        justifyContent: "space-between",
        overflow: "hidden"
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 20,
        marginRight: 10
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 99,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    btnText: {
        fontWeight: "bold"
    },
    textCover: {
        flex: 1
    },
    costDiv: {
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    costText: {
        fontWeight: "bold"
    },
    totalCostText: {
        fontWeight: "bold"
    },
    input: {
        width: 50,
        textAlign: "center",
        borderRadius: 99,
        textDecorationLine: "underline"
    }
});

export { Product, ShopItemComp };
