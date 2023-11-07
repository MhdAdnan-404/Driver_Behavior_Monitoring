import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useMemo } from "react";

import CircleProgress from "./components/CircularProgess";
import ListItem from "./components/ListItem";
import Graph from "./components/Graph";
import CenteredBlock from "./components/CenteredBlock";
import * as haptics from "expo-haptics";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import WithNavigator from "./components/TabNavigator";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Example from "./components/Chart";

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Heavy);
}

export default function Page() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);

  const [title, setTitle] = useState("speed");

  const [showNavigationBar, setShowNavigationBar] = useState(false);

  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["75%"], []);

  const handlePresentModalPress = (index) => {
    setSelectedItemIndex(index);
    bottomSheetModalRef.current?.present();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Driver Score</Text>
            <View style={{ width: "100%", height: "35%" }}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                horizontal={true}
              >
                {/* OverAll Score View */}
                <View style={styles.hScrollView}>
                  <CenteredBlock
                    secProb={<Text style={styles.text}>Overall Score</Text>}
                    myProb={<CircleProgress progress={72} />}
                    touchableDisabled={true}
                  />
                </View>

                {/* ChartView */}
                <View style={styles.hScrollView}>
                  <CenteredBlock touchableDisabled={true} myProb={<Graph />} />
                </View>
              </ScrollView>
            </View>

            <Text style={styles.text}>Scoring Factors</Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
              style={styles.scrollView}
            >
              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(2531), invokeHaptic();
                    setTitle("Aggressive Acceleration");
                    setShowNavigationBar(true);
                  }}
                  title={"Aggressive Acceleration"}
                  progress={93}
                />
              </View>

              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(2532), invokeHaptic();
                    setTitle("Aggressive Braking");
                    setShowNavigationBar(true);
                  }}
                  title={"Aggressive Braking"}
                  progress={42}
                />
              </View>

              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(255), invokeHaptic();
                    setTitle("Speeding");
                    setShowNavigationBar(true);
                  }}
                  title={"Speeding"}
                  progress={57}
                />
              </View>

              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(0), invokeHaptic();
                    setTitle("Speed");
                    setShowNavigationBar(true);
                  }}
                  title={"Speed"}
                  progress={83}
                />
              </View>

              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(240), invokeHaptic();
                    setTitle("Economical driving");
                    setShowNavigationBar(false);
                  }}
                  title={"Economical driving"}
                  progress={65}
                />
              </View>

              <View>
                <ListItem
                  onPress={() => {
                    handlePresentModalPress(230), invokeHaptic();
                    setTitle("Late Night Driving");
                    setShowNavigationBar(false);
                  }}
                  title={"Late Night Driving"}
                  progress={10}
                />
              </View>
            </ScrollView>
          </SafeAreaView>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
          >
            {showNavigationBar ? (
              <WithNavigator title={title} selectedIndex={selectedItemIndex} />
            ) : (
              <Example title={title} index={selectedItemIndex} />
            )}

            {/* put with navigator and with out navigator bar here */}
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    flex: 1,
    position: "relative",
  },
  hScrollView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blocksContainer: {
    flex: 1, // <-- Set flex to 1 to make all blocks scrollable together
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
  },
  text: {
    color: "#232F34",
    fontSize: 32,
    fontWeight: "bold",
    margin: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.3 },
  },
  textProgressBar: {
    color: "#232F34",
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0.3 },
  },
  bottomSheet: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
