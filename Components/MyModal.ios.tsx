import { useRef, useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { FixedContent } from "./modals/FixedContent";

export function MyModal() {
  const modal = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={open ? "Hide modal" : "Show modal"}
        onPress={() =>
          setOpen((open) => {
            if (open) {
              modal.current.close();
            } else {
              modal.current.open();
            }
            return !open;
          })
        }
      />
      <FixedContent ref={modal} />
      <Modal animationType="slide" visible={open}>
        <View style={styles.modal}>
          <Button
            title={open ? "Hide modal" : "Show modal"}
            onPress={() => setOpen((open) => !open)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ede3f2",
    padding: 100,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7021a",
    padding: 100,
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
});
