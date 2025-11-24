import React from "react";
import { View, StatusBar } from "react-native";
import MapView, {Marker} from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                showsPointsOfInterest={false}
                showsUserLocation
                followUserLocation
            >
                <Marker
                    title="McAlister's Deli"
                    description="Sandwich Shop"
                    coordinate={{
                        latitude: 39.95587108875202,
                        longitude: -86.01999786764371,
                    }}
                />
            </MapView>
        </View>
    );
}
