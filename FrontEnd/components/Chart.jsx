import { LineChart } from "react-native-wagmi-charts";
import * as haptics from "expo-haptics";
import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import jsonData from "../data.json";

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Medium);
}

function Example({ title, index }) {
  const [currDate, setCurrDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrDate(date + "/" + month + "/" + year);
  }, []);
  const date = new Date().getDate();
  return (
    <View style={{ height: "100%", backgroundColor: "#FFFFFF" }}>
      {/* <LineChart.Provider data={paylod[index][1].data}> */}
      <LineChart.Provider data={jsonData[index]}>
        <View style={styles.titleWrapper}>
          <View style={styles.upperTitles}>
            <View>
              <Text style={styles.subtitle}>{title}</Text>
            </View>
            <Text style={styles.subtitle}>{currDate}</Text>
          </View>
        </View>

        <LineChart.PriceText style={styles.boldTitle} />
        <LineChart>
          <LineChart.Path color="red">
            <LineChart.Gradient />
          </LineChart.Path>
          <LineChart.CursorCrosshair
            onActivated={invokeHaptic}
            onEnded={invokeHaptic}
          >
            <LineChart.Tooltip
              textStyle={{
                backgroundColor: "black",
                borderRadius: 4,
                color: "white",
                fontSize: 18,
                padding: 4,
              }}
            />
            <LineChart.Tooltip position="bottom">
              <LineChart.DatetimeText />
            </LineChart.Tooltip>
          </LineChart.CursorCrosshair>
        </LineChart>
      </LineChart.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    marginBottom: 0,
    backgroundColor: "white",
  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 7,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boldTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 7,
  },
});

export default Example;
