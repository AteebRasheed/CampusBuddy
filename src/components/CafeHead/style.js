import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../Constants/COLORS";

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    marginHorizontal: 2,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    maxWidth: 170,
  },
  name: {
    paddingHorizontal: 5,
    alignContent: "center",
    alignSelf: "center",
    marginVertical: 5,
    fontSize: 20,
    color: COLORS.font,
  },
  rating: {
    paddingHorizontal: 5,
    alignContent: "center",
    alignSelf: "center",
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.font,
  },
  left: {},
  notificationText: {
    marginTop: 19.5,
    color: "gray",
  },
});

export default styles;
