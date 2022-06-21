import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export function WebViewScreen() {
  // https://docs.expo.dev/versions/latest/sdk/webview/
  return (
    <WebView
      style={styles.container}
      // originWhitelist={['*']}
      // source={{ html: '<h1><center>Hello world</center></h1>' }}
      source={{ uri: "https://expo.dev" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
