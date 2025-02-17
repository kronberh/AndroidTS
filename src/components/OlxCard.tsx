import { Image, StyleSheet, Pressable, Text, View } from "react-native"
import { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale, moderateScale } from "react-native-size-matters";

type Product = {
    name: string;
    cost: number;
    img: string;
    place?: string;
    date?: Date
}

function OlxCard({name, cost, img, place='', date=new Date()}: Product): React.ReactElement {
    const [liked, setLiked] = useState<boolean>(false);
    
    return <View style={styles.card}>
        <Image
            source={{ uri: img }}
            style={styles.image}
        />
        <View style={styles.cardContent}>
            <View style={styles.columnOne}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.costText}>₴{cost}</Text>
                {place.length > 0 && <Text style={styles.placeText}>{place}</Text>}
                <Text style={styles.dateText}>{date.getDay()}.{date.getMonth()}.{date.getDay()}</Text>
            </View>
            <View style={styles.columnTwo}>
                <Pressable onPress={() => setLiked(!liked)}>
                    <MaterialIcons name={liked ? "favorite" : "favorite-border"} size={scale(20)} style={liked ? styles.likedIcon : styles.notLikedIcon}></MaterialIcons>
                </Pressable>
            </View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    card: {
        width: moderateScale(150, 0.3),
        height: moderateScale(300, 0.3),
        borderRadius: moderateScale(10, 0.3),
        backgroundColor: "white",
        justifyContent: "space-between",
        overflow: "hidden"
    },
    cardContent: {
        padding: moderateScale(10, 0.3),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: moderateScale(150, 0.3),
        height: moderateScale(150, 0.3),
        borderTopLeftRadius: moderateScale(10, 0.3),
        borderTopRightRadius: moderateScale(10, 0.3)
    },
    columnOne: {
        width: moderateScale(115, 0.3)
    },
    columnTwo: {
        
    },
    nameText: {
        fontSize: moderateScale(15, 0.3),
        maxHeight: moderateScale(75, 0.3),
        overflow: "hidden"
    },
    costText: {
        fontSize: moderateScale(20, 0.3),
        fontWeight: "bold",
    },
    placeText: {
        fontSize: moderateScale(12, 0.3),
        color: "gray"
    },
    dateText: {
        fontSize: moderateScale(12, 0.3),
        color: "gray"
    },
    likedIcon: {
        color: "red"
    },
    notLikedIcon: {
        color: "inherit"
    }
});

export { Product, OlxCard };
