import "react-native-gesture-handler";
import "react-native-get-random-values";
import "@saplingai/sapling-js";
import Navigator from "./src/navigator/Navigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>
  );
}
