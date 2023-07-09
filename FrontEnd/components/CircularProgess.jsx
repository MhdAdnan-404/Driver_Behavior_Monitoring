import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, Text, StyleSheet } from "react-native";

const CircleProgress = ({ progress = 0 }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ height: 130 }}>
        <AnimatedCircularProgress
          size={280}
          width={20}
          fill={progress}
          tintColor="#A52A2A"
          tintColorSecondary="#50C878"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#232F34"
          arcSweepAngle={180}
          rotation={-90}
          lineCap="round"
        >
          {() => <Text style={styles.points}>{progress}</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>Unsafe</Text>
        <Text style={styles.text2}>Safe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
  },
  text1: {
    color: "#9A9A9A",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,
  },
  text2: {
    color: "#9A9A9A",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 210,
    paddingBottom: 20,
    paddingTop: 30,
    paddingRight: 10,
  },
  points: {
    paddingBottom: 50,
    textAlign: "center",
    color: "#232F34",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default CircleProgress;
