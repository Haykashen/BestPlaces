import { Stack } from "expo-router";
import {ThemeProvider} from './context/context';

const RootLayout = () => {
  //<Stack.Screen name="placeCard" options={{ headerShown: false }} />
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="components/cards/[placeID]" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;