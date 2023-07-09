import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "react-native-animated-progress";

const MyProgressBar = ({ progress = 10 }) => {
  return (
    <View style={styles.view}>
      <ProgressBar progress={progress} height={10} backgroundColor="#232F34" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "flex-start",
    height: 20,
    width: "97%",
  },
});

export default MyProgressBar;
