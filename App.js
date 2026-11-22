import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
  },
});