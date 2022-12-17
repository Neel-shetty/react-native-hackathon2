import "react-native-gesture-handler";
import Navigator from "./src/navigator/Navigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OverlayProvider } from "stream-chat-expo";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <Navigator />
      </OverlayProvider>
    </GestureHandlerRootView>
  );
}
