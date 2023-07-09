import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Animated,
} from "react-native";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import jsonData from "../data.json";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WEIDTH = CARD_HEIGHT - 50;

const Map = ({ index }) => {
  const markers = jsonData[index].map((item, index) => (
    <Marker
      key={index}
      tappable={true}
      coordinate={{ latitude: item.latitude, longitude: item.longitude }}
      onPress={() => {}}
    >
      <View style={styles.markerView}>
        <Text style={{ color: "white" }}>{item.value}</Text>
      </View>
      <Callout>
        <View style={{ width: 40 }}>
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            {new Date(item.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </Text>
        </View>
      </Callout>
    </Marker>
  ));
  return (
    <View>
      <MapView style={styles.map}>{markers}</MapView>
      <Animated.ScrollView
        horizontal={true}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WEIDTH}
      >
        <View style={styles.hScrollView}>
          <Text>hellko</Text>
        </View>
        <View style={styles.hScrollView}>
          <Text>hellko</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  hScrollView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  markerView: {
    backgroundColor: "#FF5A5F",
    paddingBottom: 1,
    paddingTop: 1,
    paddingHorizontal: 3,
    borderRadius: 9,
    borderColor: "#000000",
    borderWidth: 1,
  },
});

export default Map;
