import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/Header.styles";
import { headerData } from "../Data/DataHeader";

export type HeaderProps = {
  text: string;
  setDisplayMyQR: (value: boolean) => void;
  setDarkMode: (value: boolean) => void;
  handleDarkMode: () => void;
};

const Header = ({ setDisplayMyQR, handleDarkMode }: HeaderProps) => {
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
          onPress={() => setDisplayMyQR(true)}
          title={headerData[1].text}
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
        {
          <Pressable onPress={handleDarkMode}>
            <Ionicons name="contrast" size={24} color="black" />
          </Pressable>
        }
      </View>
    </View>
  );
};

export default Header;
