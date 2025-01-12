import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const messages = [
  {
    id: "1",
    sender: "me",
    text: "Hello, how are you?",
  },
  {
    id: "2",
    sender: "other",
    text: "Hi, I'm good. How about you?",
  },
  {
    id: "3",
    sender: "me",
    text: "I'm doing well, thanks!",
  },
  {
    id: "4",
    sender: "other",
    text: "That's great to hear!",
  },
  {
    id: "5",
    sender: "me",
    text: "How about you?",
  },
  {
    id: "6",
    sender: "other",
    text: "I'm doing well, thanks!",
  },
  {
    id: "7",
    sender: "me",
    text: "That's great to hear!",
  },
  {
    id: "8",
    sender: "other",
    text: "How about you?",
  },
];

export default function MessengerModal() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    console.log("Clicked");
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Zhidani",
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "black" },
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            marginLeft: 5,
            padding: 5,
            borderRadius: 100,
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "me" ? styles.myMessage : styles.otherMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                item.sender === "me"
                  ? styles.myMessageText
                  : styles.otherMessageText,
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.chatArea}
      />

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  chatArea: {
    flexGrow: 1,
    padding: 10,
  },
  messageContainer: {
    marginVertical: 6,
    maxWidth: "80%",
    borderRadius: 10,
    padding: 10,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#333",
  },
  messageText: {
    fontSize: 16,
  },
  myMessageText: {
    color: "white",
  },
  otherMessageText: {
    color: "#DDD",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
    backgroundColor: "#1E1E1E",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#333",
    color: "white",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
