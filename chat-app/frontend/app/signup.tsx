import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Hook for navigating to different pages

  // Handle user signup
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/auth/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert("Success", "User created successfully!");
        navigation.navigate("login"); // Navigate to login page after successful signup
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong during signup.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />

      <Text style={styles.text} onPress={() => navigation.navigate("login")}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
  },
});

export default Signup;
