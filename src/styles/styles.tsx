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
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 14,
        color: "gray"
    },
    bookAuthorButton: {
        backgroundColor: "cornflowerblue",
        padding: 5,
        borderRadius: 99,
        alignSelf: "baseline",
        marginBottom: 5
    },
    bookAuthorButtonText: {
        color: "white",
        textAlign: "center"
    },
    bookGenreButton: {
        backgroundColor: "orchid",
        padding: 5,
        borderRadius: 99,
        alignSelf: "baseline"
    },
    bookGenreButtonText: {
        color: "white",
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        marginTop: 10
    },
    itemImage: {
        width: 50,
        height: 50,
        resizeMode: "cover"
    },
    bookCover: {
        height: 500
    }
});

export { styles };
