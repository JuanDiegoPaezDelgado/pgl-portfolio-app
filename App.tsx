import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Card from "./componentes/List";
import { cardsData } from "./Data/Data";
import Header from "./componentes/Header";
import { headerData } from "./Data/DataHeader";
import DescriptionCard from "./componentes/DescriptionCard";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header text={headerData[0].text} setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <DescriptionCard />
            <Text
              style={{
                color: "beriblak",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Cosas que me gustan mucho:
            </Text>
            <FlatList
              data={cardsData}
              renderItem={({ item }) => <Card text={item.text} />}
            />
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },

  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
