import { Stack } from "expo-router";
import {ContextProvider} from './context/context';

const RootLayout = () => {
  //<Stack.Screen name="placeCard" options={{ headerShown: false }} />
  return (
    <ContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="components/cards/[placeID]" options={{ headerShown: false }} />
      </Stack>
    </ContextProvider>
  );
};

export default RootLayout;