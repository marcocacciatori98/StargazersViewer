import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5eb",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 5,
  },

  view1: {
    height: 305,
    width: "100%",
    maxWidth: 500,
    paddingTop: 70,
    backgroundColor: "#3d5a80",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  container2: {
    backgroundColor: "#edf2f4",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 5,
    height: 250,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },

  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 30,
    backgroundColor: "#ffffff",
  },

  text1: {
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
    paddingLeft: 30,
    color: "white",
    textAlignVertical: "center",
  },

  text3: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    paddingLeft: 30,

    textAlignVertical: "center",
  },

  text: {
    fontSize: 15,
    paddingVertical: 12,
  },

  text2: {
    fontSize: 25,
    fontWeight: "bold",

    paddingLeft: 15,
    textAlignVertical: "center",
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: 200,
    margin: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    backgroundColor: "#ee6c4d",
  },
  logo: {
    width: 50,
    height: 50,
  },
  list: {
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});
