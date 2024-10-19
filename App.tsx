import { useState } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./componentes/Header";
import { headerData } from "./Data/DataHeader";
import DescriptionCard from "./componentes/DescriptionCard";
import { styles } from "./styles/Apptsx.style";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Header text={headerData[0].text} setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={/*isDarkMode ?*/ styles.bodystails}>
          <View>
            <DescriptionCard />
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
