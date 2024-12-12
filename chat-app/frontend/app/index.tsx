import { useEffect } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  // Check if the user is logged in (has a token)
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        // still need to create home page
        navigation.navigate("home"); // Redirect to home if user is authenticated
      } else {
        navigation.navigate("login"); // Redirect to login if no token
      }
    };

    checkAuth();
  }, []);

  return (
    <View>
      <Text>Welcome to the App!</Text>
    </View>
  );
};

export default Index;
