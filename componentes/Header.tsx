import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import React from "react";

export type HeaderProps = {
  text: string;
  setDisplayMyQR: (value: boolean) => void;
};

const Header = ({ text, setDisplayMyQR }: HeaderProps) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firsttoprowContainer}>{text}</Text>
      <View style={styles.rowTopSecondContainer}>
        <Pressable
          style={styles.buttonruta}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              ...styles.shadoxboxing,
            }}
          >
            {text}
          </Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default Header;
