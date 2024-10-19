import { View, Text, Pressable, StyleSheet, Button } from "react-native";
import React from "react";
import { styles } from "../styles/Header.styles";
import { headerData } from "../Data/DataHeader";

export type HeaderProps = {
  text: string;
  setDisplayMyQR: (value: boolean) => void;
};

const Header = ({ setDisplayMyQR }: HeaderProps) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firsttoprowContainer}>{headerData[0].text}</Text>
      <View style={styles.rowTopSecondContainer}>
        <Pressable
          style={styles.buttonruta}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text style={[styles.bar, styles.shadoxboxing]}>
            {headerData[2].text}
          </Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title={headerData[1].text}
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
};

export default Header;
