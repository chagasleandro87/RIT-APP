import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

let WebView;
if (Platform.OS !== "web") {
  WebView = require("react-native-webview").WebView;
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Agenda" onPress={() => navigation.navigate("WebViewScreen", { url: "https://ongrace.com/buscar-eventos/" })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Patrocinador" onPress={() => navigation.navigate("WebViewScreen", { url: "https://ongrace.com/patrocinador/" })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Igrejas" onPress={() => navigation.navigate("WebViewScreen", { url: "https://ongrace.com/buscar-igrejas/" })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Doações" onPress={() => navigation.navigate("WebViewScreen", { url: "https://ongrace.com/doacao/" })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir para Outra Página" onPress={() => navigation.navigate("OtherPage")} />
      </View>
    </View>
  );
};

const WebViewScreen = ({ route }) => {
  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <iframe src={route.params.url} style={{ width: "100%", height: "100%", border: "none" }} title="WebView" />
      </View>
    );
  }
  return <WebView source={{ uri: route.params.url }} style={{ flex: 1 }} />;
};

const OtherPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é outra página!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Voltar para Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="O Portal da RIT" component={HomeScreen} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        <Stack.Screen name="OtherPage" component={OtherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});
