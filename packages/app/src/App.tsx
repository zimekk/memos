import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import Navigation from "./navigation";
import { ContextProvider } from "./Context";

export default function App() {
  const [launch, setLaunch] = useState(true);
  return (
    <ContextProvider value={{ setLaunch }}>
      <SafeAreaProvider>
        <Navigation launch={launch} />
        <StatusBar />
      </SafeAreaProvider>
    </ContextProvider>
  );
}
