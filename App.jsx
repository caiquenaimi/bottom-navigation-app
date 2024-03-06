import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import Contact from "./src/screens/Contact";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
