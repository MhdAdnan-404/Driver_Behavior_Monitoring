import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MyProgressBar from "./ProgressBar";
const width = Dimensions.get("window").width;

const ListItem = ({ progress, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/* leftSide */}
        <View style={styles.leftWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MyProgressBar progress={progress} />
        </View>

        {/* RightSide */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{`${progress}/100`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    width: width * 0.97,
    borderColor: "#000000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  leftWrapper: {
    flexDirection: "column",
    width: "83%",
  },
  titleWrapper: {},
  title: {
    color: "#232F34",
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    shadowColor: "#000000",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
});

export default ListItem;
