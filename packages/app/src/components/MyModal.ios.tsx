import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export function MyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        title={open ? "Hide modal" : "Show modal"}
        onPress={() => setOpen((open) => !open)}
      />
      <Modal animationType="slide" presentationStyle="pageSheet" visible={open}>
        <View style={styles.modal}>
          <Text>MyModal!</Text>
          <Button
            title={open ? "Hide modal" : "Show modal"}
            onPress={() => setOpen((open) => !open)}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    padding: 100,
  },
});
