import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import * as haptics from "expo-haptics";
const width = Dimensions.get("window").width;

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
}

const CenteredBlock = ({ myProb, touchableDisabled, secProb, onpress }) => {
  function onClick() {
    onpress();
    invokeHaptic();
  }
  return (
    <TouchableOpacity onPress={onClick} disabled={touchableDisabled}>
      <View style={styles.block}>
        {secProb}
        {myProb}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    width: width * 0.97,
    borderRadius: 15,
    borderColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default CenteredBlock;
