import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export type CardProps = {
  text: string;
};

const Card = ({ text }: CardProps) => {
  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <Text style={styles.cosasQmeGustanMuxoEstails}>{text}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default Card;
