import { Stack } from "expo-router";

const RootLayout = () => {
//<Stack.Screen name="placeCard" options={{ headerShown: false }} />
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="components/cards/[placeID]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;