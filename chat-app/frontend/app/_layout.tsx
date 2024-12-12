import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />  {/* The screen that loads by default */}
      <Stack.Screen name="login" />   {/* The login screen */}
      <Stack.Screen name="signup" />  {/* The signup screen */}
      {/* Add more screens as needed */}
    </Stack>
  );
}
