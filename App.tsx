import { useState } from "react";
import { Text, View, FlatList } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Card from "./componentes/List";
import { cardsData } from "./Data/Data";
import Header from "./componentes/Header";
import { headerData } from "./Data/DataHeader";
import DescriptionCard from "./componentes/DescriptionCard";
import { styles } from "./css/app.modules";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <Header text={headerData[0].text} setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <DescriptionCard />
            <Text style={styles.titleText}>Cosas que me gustan mucho:</Text>
            <FlatList
              data={cardsData}
              renderItem={({ item }) => <Card text={item.text} />}
            />
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/JuanDiegoPaezDelgado/pgl-portfolio-app" />
          </View>
        </View>
      )}
    </View>
  );
}
