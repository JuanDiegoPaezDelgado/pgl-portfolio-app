import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { descriptionData } from "../Data/DescriptionData";

const DescriptionCard = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.avatar} source={descriptionData.image} />
      <View
        style={{
          margin: 10,
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          {descriptionData.title}
        </Text>
        <Text>{descriptionData.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
});

export default DescriptionCard;
