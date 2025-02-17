import { Text, View, Image } from "react-native";
import React from "react";

type Film = {
    title: string;
    year: number;
    image: string
}

function FilmComp({ title, year, image }: Film): React.ReactElement {
    return <View style={{ height: 100, width: 400, flexDirection: "row", gap: 10, marginBottom: 10 }}>
        <Image
            source={{ uri: image }}
            style={{
                width: 100,
                height: 100
            }}
        />
        <View style={{ flex: 1, gap: 8 }} >
            <Text style={{ fontSize: 18 }}>
                {title}
            </Text>
            <Text style={{ fontSize: 14, color: "grey" }}>
                Year {year}
            </Text>
        </View>
    </View>;
}

export { Film, FilmComp };