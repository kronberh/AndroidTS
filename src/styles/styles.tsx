import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    bookItem: {
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: "row",
        gap: 15
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    bookAuthor: {
        fontSize: 14,
        color: "gray"
    },
    bookAuthorButton: {
        backgroundColor: "cornflowerblue",
        padding: 5,
        borderRadius: 99,
        width: 150,
    },
    bookAuthorButtonText: {
        color: "white",
        textAlign: "center"
    },
    bookDescription: {
        fontSize: 16,
        marginTop: 10
    },
    bookImage: {
        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    bookCover: {
        height: 500
    }
});

export { styles };
