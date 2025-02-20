import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";

type RaceFormProps = {
    orientation: "landscape" | "portrait";
};

type City = {
    id: number;
    name: string;
};

const cities: City[] = [
    { id: 1, name: "Київ" },
    { id: 2, name: "Одеса" },
    { id: 3, name: "Львів" },
    { id: 4, name: "Харків" },
];

const onSubmit = () => {
    Alert.alert("Тут будуть квитки");
}

function RaceForm({ orientation = "landscape" }: RaceFormProps): React.ReactElement {
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
    const [date, setDate] = useState<Date>();

    return orientation === "landscape" ? (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Dropdown
                    data={cities}
                    onChange={() => {}}
                    labelField="name"
                    valueField="id"
                    placeholder="Звідки"
                    placeholderStyle={styles.placeholder}
                    search={true}
                    searchField="name"
                    searchPlaceholder="Пункт відправлення"
                    renderLeftIcon={() => <MaterialIcons name="logout" color="gray" size={15} />}
                    style={styles.input}
                    containerStyle={styles.dropdownContainer}
                />
                <Dropdown
                    data={cities}
                    onChange={() => {}}
                    labelField="name"
                    valueField="id"
                    placeholder="Куди"
                    placeholderStyle={styles.placeholder}
                    search={true}
                    searchField="name"
                    searchPlaceholder="Пункт прибуття"
                    renderLeftIcon={() => <MaterialIcons name="login" color="gray" size={15} />}
                    style={styles.input}
                    containerStyle={styles.dropdownContainer}
                />
                <TouchableOpacity
                    onPress={() => setDatePickerVisibility(true)}
                    style={[styles.input, styles.textInput]}
                >   
                    <MaterialIcons name="calendar-today" color="gray" size={scale(15)} />
                    {date && <Text>{date.toLocaleDateString()}</Text>}
                    {!date && <Text style={styles.placeholder}>Дата поїздки</Text>}
                </TouchableOpacity>
                <View style={[styles.input, styles.textInput]}>
                    <MaterialIcons name="person" color="gray" size={scale(15)} />
                    <TextInput
                        placeholder="Пасажири"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.submit}
                onPress={onSubmit}
            >
                <Text style={styles.submitText}>Знайти квиток</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date: Date) => {
                    setDate(date);
                    setDatePickerVisibility(false)
                }}
                onCancel={() => setDatePickerVisibility(false)}
            />
        </View>
    ) : (
        <View style={[styles.form, styles.formVertical]}>
            <View style={[styles.inputContainer, styles.inputContainerVertical, styles.inputContainerPlaceVertical]}>
                <Dropdown
                    data={cities}
                    onChange={() => {}}
                    labelField="name"
                    valueField="id"
                    placeholder="Звідки"
                    placeholderStyle={styles.placeholder}
                    search={true}
                    searchField="name"
                    searchPlaceholder="Пункт відправлення"
                    renderLeftIcon={() => <MaterialIcons name="logout" color="gray" size={15} />}
                    style={styles.input}
                    containerStyle={styles.dropdownContainer}
                />
                <Dropdown
                    data={cities}
                    onChange={() => {}}
                    labelField="name"
                    valueField="id"
                    placeholder="Куди"
                    placeholderStyle={styles.placeholder}
                    search={true}
                    searchField="name"
                    searchPlaceholder="Пункт прибуття"
                    renderLeftIcon={() => <MaterialIcons name="login" color="gray" size={15} />}
                    style={styles.input}
                    containerStyle={styles.dropdownContainer}
                />
            </View>
            <View style={[styles.inputContainer, styles.inputContainerVertical]}>
                <TouchableOpacity
                    onPress={() => setDatePickerVisibility(true)}
                    style={[styles.input, styles.textInput]}
                >   
                    <MaterialIcons name="calendar-today" color="gray" size={scale(15)} />
                    {date && <Text>{date.toLocaleDateString()}</Text>}
                    {!date && <Text style={styles.placeholder}>Дата поїздки</Text>}
                </TouchableOpacity>
                <View style={[styles.input, styles.textInput]}>
                    <MaterialIcons name="person" color="gray" size={scale(15)} />
                    <TextInput
                        placeholder="Пасажири"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <TouchableOpacity
                style={[styles.submit, styles.submitVertical]}
                onPress={onSubmit}
            >
                <Text style={styles.submitText}>Знайти квиток</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date: Date) => {
                    setDate(date);
                    setDatePickerVisibility(false)
                }}
                onCancel={() => setDatePickerVisibility(false)}
            />
        </View>
    );
}

export { RaceForm };

const styles = StyleSheet.create({
    form: {
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    formVertical: {
        flexDirection: "column",
        gap: 20
    },
    inputContainer: {
        width: scale(500),
        borderRadius: scale(10),
        borderWidth: scale(1),
        flexDirection: "row",
        backgroundColor: "white",
        overflow: "hidden",
        borderColor: "gray",
    },
    inputContainerVertical: {
        width: "100%"
    },
    inputContainerPlaceVertical: {
        height: scale(120),
        flexDirection: "column"
    },
    input: {
        padding: scale(10),
        borderWidth: scale(1),
        borderColor: "gray",
        flex: 1
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center"
    },
    placeholder: {
        color: "gray"
    },
    dropdownContainer: {
        width: scale(500)
    },
    submit: {
        width: scale(150),
        borderRadius: scale(10),
        backgroundColor: "tomato",
        justifyContent: "center"
    },
    submitVertical: {
        height: scale(50),
        width: "100%"
    },
    submitText: {
        fontSize: scale(15),
        color: "white",
        textAlign: "center"
    }
});
