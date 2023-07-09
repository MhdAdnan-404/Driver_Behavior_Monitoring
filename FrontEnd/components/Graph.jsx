import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Graph = ({ progress = 10 }) => {
  return (
    <LineChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [90, 200, 30, 40, 50, 60, 70, 80, 90, 10],
          },
        ],
      }}
      width={Dimensions.get("window").width * 0.95} // from react-native
      height={265}
      yAxisLabel=""
      yAxisSuffix="KM"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientTo: "#FFFFFF",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 0,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#232F34",
        },
      }}
      bezier
      style={{
        marginVertical: 5,
        borderRadius: 12,
      }}
    />
  );
};

export default Graph;
