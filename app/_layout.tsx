import { Stack } from "expo-router";

const RootLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="placeCard" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;