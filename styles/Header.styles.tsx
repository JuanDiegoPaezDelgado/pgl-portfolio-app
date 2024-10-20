import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    display: "flex",
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "space-evenly",
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
  bar: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
