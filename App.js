import React from "react";
import { View, StatusBar } from "react-native";
import MapView from "react-native-maps";
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
                <MapView.Marker
                    title="McAlister's Deli"
                    description="Sandwich Shop"
                    coordinate={{
                        latitude: 39.95759084378544,
                        longitude: -86.01729608825835,
                    }}
                />
            </MapView>
        </View>
    );
}