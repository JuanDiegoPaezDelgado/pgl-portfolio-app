import { useState } from "react";
import { View } from "react-native";
import Header from "./componentes/Header";
import { headerData } from "./Data/DataHeader";
import DescriptionCard from "./componentes/DescriptionCard";
import { styles } from "./styles/Apptsx.style";
import MyQr from "./componentes/MyQr";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((value) => !value);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <Header
        text={headerData[0].text}
        setDisplayMyQR={setDisplayMyQR}
        setDarkMode={setDarkMode}
        handleDarkMode={handleDarkMode}
      />
      {displayMyQR ? <DescriptionCard /> : <MyQr />}
    </View>
  );
}
