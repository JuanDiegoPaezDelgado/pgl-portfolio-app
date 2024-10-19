import { useState } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./componentes/Header";
import { headerData } from "./Data/DataHeader";
import DescriptionCard from "./componentes/DescriptionCard";
import { styles } from "./styles/Apptsx.style";
import MyQr from "./componentes/MyQr";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Header text={headerData[0].text} setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? <DescriptionCard /> : <MyQr />}
    </View>
  );
}
