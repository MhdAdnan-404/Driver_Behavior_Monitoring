const Tab = createBottomTabNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Example from "./Chart";
import Map from "./Map";

const WithNavigator = ({ title, selectedIndex }) => {
  function MapScreen() {
    return <Map index={selectedIndex} />;
  }
  function ChartScreen() {
    return <Example title={title} index={selectedIndex} />;
  }
  return (
    <Tab.Navigator
      activeColor="#808080"
      inactiveColor="#3e2465"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,

          // Set the desired height here
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-bell-curve-cumulative"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default WithNavigator;
