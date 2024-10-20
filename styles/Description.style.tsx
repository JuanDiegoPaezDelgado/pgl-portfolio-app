import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  container: { flexDirection: "row", alignItems: "center" },
  card: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  titleText: {
    color: "beriblak",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
  },
  bodystails: {
    marginTop: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "87.5%",
  },
  darkBodyTails: {
    marginTop: 0,
    width: "100%",
    borderColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    height: "87.5%",
  },
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  lightCards: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
  },
});
