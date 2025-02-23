import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5"
    },
    bookItem: {
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: "row",
        gap: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
    actions: {
        flexDirection: "row"
    },
    bookCover: {
        height: 500
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "white",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 12,
        borderRadius: 6,
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export { styles };
